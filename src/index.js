import express from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Retorna todos os usuários.
app.get('/server', async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

// Retorna um usuário pelo ID.
app.get('/server/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return res.send(user);
  } catch (erro) {
    return res.status(404).send('ID não encontrado');
  }
});

// Cria um novo usuário.
app.post('/server', async (req, res) => {
  const { nome, mail, fone, endereco } = req.body;

  if (!nome || !mail || !fone || !endereco) {
    return res.status(400).send('nome, email, fone e endereço são obrigatórios');
  }

  const create = await prisma.user.create({
    data: {
      id: uuidv4(),
      nome,
      mail,
      fone,
      endereco,
    },
  });
  console.log('Usuário criado:', create);

  return res.status(201).send('Usuário criado');
});

// Atualiza um usuário pelo ID.
app.put('/server/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, mail, fone, endereco } = req.body;

  try {
    const update = await prisma.user.update({
      where: { id },
      data: { nome, mail, fone, endereco },
    });
    console.log('Usuário atualizado:', update);
    return res.send('Usuário atualizado');
  } catch (erro) {
    return res.status(404).send('ID não encontrado ou dados incompletos');
  }
});

// Deleta um usuário pelo ID.
app.delete('/server/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id },
    });
    return res.send('Usuário deletado');
  } catch (erro) {
    return res.status(404).send('ID não encontrado');
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
