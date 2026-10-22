// server/models/Filme.js
import mongoose from 'mongoose';

const filmeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  ano: { type: Number, required: true },
  genero: { type: String, required: true },
  diretor: { type: String, required: true }
});

export default mongoose.model('Filme', filmeSchema);
