// server/models/Carro.js
import mongoose from 'mongoose';

const carroSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: Number, required: true }
});

export default mongoose.model('Carro', carroSchema);
