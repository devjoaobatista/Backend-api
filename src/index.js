import express from 'express';
const app = express()

app.post('/users', (req, res) => {
    return res.send("Usuário criado");
})

app.get('/users', (req, res) => {
    return res.send("retornar o usuário");
});

app.delete('/users', (req, res) => {
    return res.send("Usuário deletado");
});

app.put('users', (req, res) => {
    return res.send("Usuário atualizado");
});

app.listen(5000, () => {
    return console.log ("Servidor rodando");
});





