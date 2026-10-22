// server/routes/carroRoutes.js
import express from 'express';
import {
  criarCarro,
  listarCarro,
  obterCarro,
  atualizarCarro,
  deletarCarro
} from '../controllers/carroController.js';

const router = express.Router();

router.post('/', criarCarro);
router.get('/', listarCarro);
router.get('/:id', obterCarro);
router.put('/:id', atualizarCarro);
router.delete('/:id', deletarCarro);

export default router;
