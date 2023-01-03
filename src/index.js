import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

const users = [];

// Essa rota retorna todos os usuários.
app.get('/server', (request, response) => response.send(users));

// Essa rota retorna apenas um usuário através do ID repassado.
app.get('/server/:id', (request, response) => {
  const { id } = request.params;
  const indiceOfUser = users.findIndex((user) => user.id === id);

  if (indiceOfUser === -1) {
    return response.status(404).send('Esse usuário não existe!');
  }

  return response.send(users[indiceOfUser]);
});

// Essa rota cria um novo usuário.
app.post('/server', (request, response) => {
  const {
    nome, email, fone, endereco,
  } = request.body;

  if (!nome || !email || !fone || !endereco) {
    return response.status(400).send('nome, email, fone e endereço são necessários!');
  }

  const newUser = {
    id: uuidv4(),
    nome,
    email,
    fone,
    endereco,
  };

  users.push(newUser);

  return response.status(201).send('Usuário criado!');
});

// Essa rota atualiza um usuário da ID repassada.
app.put('/server/:id', (request, response) => {
  const { id } = request.params;
  const {
    nome, email, fone, endereco,
  } = request.body;
  const indiceOfUser = users.findIndex((user) => user.id === id);

  if (indiceOfUser === -1) {
    return response.status(404).send('Esse ID não existe!');
  }
  if (!nome || !email || !fone || !endereco) {
    return response.status(400).send('nome, email, fone e endereço são necessários!');
  }
  const newDataOfUser = {
    id,
    nome,
    email,
    fone,
    endereco,
  };

  users[indiceOfUser] = newDataOfUser;
  return response.send('usuario Atualizado!');
});

// Essa rota apaga o usuário da ID repassada.
app.delete('/server/:id', (request, response) => {
  const { id } = request.params;
  const indiceOfUser = users.findIndex((user) => user.id === id);

  if (indiceOfUser === -1) {
    return response.status(404).send('Esse ID não existe!');
  }

  users.splice(indiceOfUser, 1);
  return response.send('Usuário deletado!');
});

app.listen(3000, () => console.log('Servidor rodando'));
