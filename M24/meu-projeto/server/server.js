// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
// import { connectDB} from './config/database.js';

// Importando Rotas
// import usuarioRoutes from './routes/usuarioRoutes.js';
// import agendamentoRoutes from './routes/agendamentoRoutes.js'; 
// import userRoutes from './routes/userRoutes.js'; 

dotenv.config();
const app = express();
app.use(cors());

// const corsOptions = {
//   origin: 'http://localhost:3000', // Allow only this origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
//   allowedHeaders: 'Content-Type,Authorization', // Allowed request headers
//   credentials: true, // Allow sending cookies and authentication headers
// };

// app.use(cors(corsOptions)); // Apply CORS with specific options


app.use(express.json());


// Rota raiz
app.get('/', (req, res) => {
    res.send('API do Sistema de Agendamentos Online');
  });

  // Usar as rotas
// app.use('/api/usuarios', usuarioRoutes);
// app.use('/api/agendamentos', agendamentoRoutes.js);
// app.use('/api/users', userRoutes.js);

// Injeção do barramento de rotas da API
app.use('/api', routes);

// Rota coringa: deve ser a **última**
app.use((req, res) => {
  res.status(404).json({
    erro: 'Rota não encontrada',
    caminho: req.originalUrl
  });
});
  
// connectDB();


app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});