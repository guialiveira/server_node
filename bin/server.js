const app = require('../src/app');

const { pessoa } = require('../models'); //Definindo que toda pessoa seqgue esse model

//pessoa.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' }); //Exemplo preenchendo tabela

app.post('/register', async (req, res) => {//post = criar
    const pessoa = await Pessoa.create(req.body); // A pessoa que vier do servideor vai estar no req.body
    res.json(pessoa);
});

const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
app.listen(port, function () {
    console.log(`localhost:${port}  aberto`)
})

/* 
app.get('/pessoa', (req, res) => {}); //Listar todos
app.post('/pessoa', (req, res) => {}); // Criar
app.get('/pessoa/:id', (req, res) => {}); //Buscar
app.put('/pessoa/:id', (req, res) => {}); //Editar
app.delete('/pessoa/:id', (req, res) => {}); //Deletar
   */