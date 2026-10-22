// server/routes/filmeRoutes.js
import express from 'express';
import {
  criarFilme,
  listarFilme,
  obterFilme,
  atualizarFilme,
  deletarFilme
} from '../controllers/filmeController.js';

const router = express.Router();

router.post('/', criarFilme);
router.get('/', listarFilme);
router.get('/:id', obterFilme);
router.put('/:id', atualizarFilme);
router.delete('/:id', deletarFilme);

export default router;
