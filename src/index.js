import express from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Essa rota retorna todos os usuários.
app.get('/server', async (request, response) => {
  const DataBankUsers = await prisma.user.findMany();
  response.send(DataBankUsers);
});

// Essa rota retorna apenas um usuário através do ID repassado.
app.get('/server/:id', async (request, response) => {
  const { id } = request.params;

  try {
    const getOneUser = await prisma.user.findUnique({
      where: { id },
    });
    return response.send(getOneUser);
  } catch (erro) {
    return response.status(404).send('Esse ID não existe');
  }
});

// Essa rota cria um novo usuário.
app.post('/server', async (request, response) => {
  const {
    nome, mail, fone, endereco,
  } = request.body;

  if (!nome || !mail || !fone || !endereco) {
    return response.status(400).send('nome, email, fone e endereço são necessários!');
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
  console.log(create);
  console.log('usuário Criado');

  return response.status(201).send('Usuário criado!');
});

// Essa rota atualiza um usuário da ID repassada.
app.put('/server/:id', async (request, response) => {
  const { id } = request.params;
  const {
    nome, mail, fone, endereco,
  } = request.body;

  try {
    const update = await prisma.user.update({
      where: { id },
      data: {
        nome,
        mail,
        fone,
        endereco,
      },
    });
    console.log(update);
    return response.send('usuario Atualizado!');
  } catch (erro) {
    return response.status(404).send('Esse ID não existe no banco de dados ou os dados estão incompletos!');
  }
});

// Essa rota apaga o usuário da ID repassada.
app.delete('/server/:id', async (request, response) => {
  const { id } = request.params;

  try {
    await prisma.user.delete({
      where: { id },
    });
    return response.send('Usuário deletado');
  } catch (erro) {
    return response.status(404).send('Esse ID não existe');
  }
});

app.listen(3000, () => console.log('Servidor rodando'));
