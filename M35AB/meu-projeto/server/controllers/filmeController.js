// server/controllers/filmeController.js
import Filme from '../models/Filme.js';

// CREATE - salvar no banco
export const criarFilme = async (req, res) => {
  try {
    const novo = await Filme.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// READ - listar todos
export const listarFilme = async (req, res) => {
  try {
    res.json(await Filme.find());
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// READ - buscar um por id
export const obterFilme = async (req, res) => {
  try {
    const item = await Filme.findById(req.params.id);
    if (!item) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido' });
  }
};

// UPDATE - editar
export const atualizarFilme = async (req, res) => {
  try {
    const item = await Filme.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!item) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// DELETE - excluir
export const deletarFilme = async (req, res) => {
  try {
    const item = await Filme.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.json({ mensagem: 'Filme excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido' });
  }
};
