// src/controllers/postController.js
import prisma from '../config/prisma.js';

// Criar um novo post vinculado a um usuário existente
const createPost = async (req, res) => {
  try {
    const { title, content, published, authorId } = req.body;

    if (!title || !authorId) {
      return res.status(400).json({ error: 'Título e ID do autor são obrigatórios.' });
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published: published || false,
        authorId: Number(authorId),
      },
    });

    return res.status(201).json(newPost);
  } catch (error) {
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Autor especificado não existe.' });
    }
    console.error('Erro ao criar post:', error);
    return res.status(500).json({ error: 'Erro interno no servidor ao criar post.' });
  }
};

// Listar todos os posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

export {
  createPost,
  getAllPosts,
};