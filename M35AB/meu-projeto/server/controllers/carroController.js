// server/controllers/carroController.js
import Carro from '../models/Carro.js';

// CREATE - salvar no banco
export const criarCarro = async (req, res) => {
  try {
    const novo = await Carro.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// READ - listar todos
export const listarCarro = async (req, res) => {
  try {
    res.json(await Carro.find());
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// READ - buscar um por id
export const obterCarro = async (req, res) => {
  try {
    const item = await Carro.findById(req.params.id);
    if (!item) return res.status(404).json({ erro: 'Carro não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido' });
  }
};

// UPDATE - editar
export const atualizarCarro = async (req, res) => {
  try {
    const item = await Carro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!item) return res.status(404).json({ erro: 'Carro não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// DELETE - excluir
export const deletarCarro = async (req, res) => {
  try {
    const item = await Carro.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: 'Carro não encontrado' });
    res.json({ mensagem: 'Carro excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido' });
  }
};
