import express from 'express';
const app = express()
app.use(express.json())

//O ID dos "users" é o indice do array
const allusers = [
    {nome: "joao", telefone: 12345678, email: "joao@express.com", endereco: "Vila Express, n8" },
    {nome: "Maria", telefone: 17777777, email: "maria@express.com", endereco: "Vila Express, n9" },
    {nome: "Pedro", telefone: 22222222, email: "pedro@express.com", endereco: "Vila Express, n10" },    
];

app.post('/users', (req, res) => {
    let newuser = req.body
    allusers.push(newuser);
    console.log(allusers);
    return res.send("Usuário criado");
});

app.get('/users', (req, res) => {
    return res.send(allusers);
   
 //tentativa de retorna o indice do array como id.
 // for(let i = 0; i < allusers.length; i++){
   //     return res.send(i + allusers[i]);
   // }
});

app.delete('/users', (req, res) => {
    return res.send("Usuário deletado");
});

app.put('/users/:id', (req, res) => {
    const params = req.params
    console.log(params)
    return res.send("Usuário atualizado");
});

app.listen(5000, () => {
    return console.log ("Servidor rodando");
});





