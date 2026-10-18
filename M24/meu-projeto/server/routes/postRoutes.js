// src/routes/postRoutes.js
import { Router } from 'express';
import { createPost, getAllPosts } from '../controllers/postController.js';

const router = Router();

router.get('/', getAllPosts);
router.post('/', createPost);

export default router;