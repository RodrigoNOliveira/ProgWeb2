const express = require('express');  //metodo que requere um modulo http que serve para criar um servidor 
const app = express()
const port = 3000;
const path = require('path');

app.get('/', (req, res) =>{
  // res.send('<h1>Hello world</h1>');
  res.sendFile(path.join(__dirname,'Atividade1Html/Blindspot.html'));
;})


app.get('/usuario', (req, res)=>{
  res.send('<h1>Voce acessou a rota /usuario </h1>')
})

// app.get('/ab?cd', (req, res)=>{
//   res.send('<h1>Rota /ab?cd</h1>');
// })

//  app.get('/ab+cd', (req, res)=>{
//    res.send('<h1>Rota /ab+cd</h1>');
//  })

 app.get('/ab*cd', (req, res)=>{
   res.send('<h1>Rota /ab*cd</h1>');
 })


app.get('/users/:userId/books/:bookId', (req,res)=>{
  res.send(`<h2>Usuario: ${req.params.userId}</h2><h2>Livro: ${req.params.bookId}</h2>`);
})

app.get('/voos/:de-:para', (req,res)=>{
  res.send(`<h2>De: ${req.params.de}</h2><h2>Para: ${req.params.para}</h2>`);
})



app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.use((req,res)=>{
  res.status(500).sendFile(path.join(__dirname, '500.html'))
})

app.listen(port, () => {
  console.log(`O Servidor esta rodando na porta ${port}`);
})