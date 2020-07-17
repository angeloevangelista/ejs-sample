const express = require('express');
const opn = require('opn'); // apenas para abrir o navegador

// porta, definida aqui apenas porque estou usando em 2 lugares
const port = process.env.PORT || 3000;

// declarando o server
const app = express();

// definindo a porta de acesso
app.listen(port, () => {
  console.log(`Your app is running at http://127.0.0.1:${port} 🚀`);

  opn(`http://127.0.0.1:${port}`)
});

app.set('view engine', 'ejs'); // definindo o eJs como de view, sla o nome askj 

app.get('/', (req, res) => { // rota raiz
  res.render('index');
});


// rotas de "cadastro"
app.get('/cadastro/cadastro', (req, res) => {
  res.render('cadastro/cadastro');
});

app.get('/cadastro/login', (req, res) => {
  res.render('cadastro/login');
});
