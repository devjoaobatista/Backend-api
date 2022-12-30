import express, { query } from 'express';
const app = express();
app.use(express.json());

const users = [
    {nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2"},
    {nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1"}
];

function logRoutes(request, response, next) {
    const {method, url } = request;
    const route = `[${method.toUpperCase()}] ${url}`;
    console.log(route);
    return next();
};

app.use(logRoutes);

app.get("/server", (request, response) => {
    const usersWithIndex = users.map((user, id) => {
        const objectTransformed = { id, ...user };
        return  objectTransformed;
    });    
    return response.send(usersWithIndex);
});

app.get("/server/:id", (request, response) => {
    const { id } = request.params;
    
    if(id > users.length) {
        return response.status(404).send("Esse ID não existe!");
    }
    else {
        return response.send(users[id]);
    }
});

app.post("/server", (request, response) => {
    let newUser = request.body;
    users.push(newUser);

    return response.status(201).send("Usuário criado!");
});

app.put("/server/:id", (request, response) => {
    const { id } = request.params;
    const updateUser = request.body;
    
    if(id > users.length) {
        return response.status(404).send("Esse ID não existe");
    }
    else {
        users[id] = updateUser
        return response.send("Usuário atualizado!");
    }
});

app.delete("/server/:id", (request, response) => {
    const { id } = request.params;
    
    if(id > users.length) {
        return response.status(404).send("Esse ID não existe!");
    }
    else {
        users.splice(id, 1);
        return response.send("Usuário deletado!");
    }
});


app.listen(3000, () => { return console.log ("Servidor rodando"); });