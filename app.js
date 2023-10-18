const express = require('express')
var bodyParser = require('body-parser');
const DatabaseMemory = require('./database-test.js');


const app = express();
const database = new DatabaseMemory();
app.use(express.static('public'));
app.use(bodyParser.json())

//BANCO DE DADOS//Request body

app.post('/users', (req, res) => {
    const body = req.body
    console.log(body);

    database.create({
        nome: 'teste',
        telefone: '(99)99999-9999',
        email: 'teste@teste.com',
        senha: '123456'
    
    })
    
    
    return res.status(201).send()
}) 

app.get('/users', (req,res) => {
    return 'Hello World'
})

app.put('/users/:id', (req,res) => {
    return 'Hello Worldaaaaa'
})
app.delete('/users/:id', (req,res) => {
    return 'Hello Worldddddddddd'
})

//ROTAS

app.get('/', (req, res) => {
    return 'index.html';  
})
app.get('/about', (req, res) => {
    return 'about.html';  
})
app.get('/contact', (req, res) => {
    return 'contact.html';  
})


app.use((req, res) => {
    res.status(404).sendFile('error.html', {root: './public'});
})

//SERVIDOR TA ON?

app.listen(3000, () => {
    console.log('ON!!!');
});

