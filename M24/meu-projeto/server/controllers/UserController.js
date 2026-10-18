// src/controllers/userController.js
import prisma from '../config/prisma.js';

// Listar todos os usuários
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).json({ error: 'Erro interno no servidor ao buscar usuários.' });
  }
};

// Obter usuário por ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { posts: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

// Criar novo usuário
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'O campo email é obrigatório.' });
    }

    const newUser = await prisma.user.create({
      data: { name, email },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
    }
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro interno no servidor ao criar usuário.' });
  }
};

// Deletar usuário
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: 'Usuário removido com sucesso.' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Usuário não encontrado para exclusão.' });
    }
    console.error('Erro ao deletar usuário:', error);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

export {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
};