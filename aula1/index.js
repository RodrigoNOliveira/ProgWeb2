const http = require('http');  //metodo que requere um modulo http que serve para criar um servidor 

const hostname = '127.0.0.1';
const port = 3000;

    //utiliza um metodo createserver que leva os parametros req requisicao e res resposta, req trata as informacoes enviadas para o servidor(por ex tipo de requisicao: get, post, update e delete) e tambem informa os dados que estao sendo enviados, res tem 3 metodos
const server = http.createServer((req, res) => {    
  res.statusCode = 200;  //envia o codigo status para o cliente
  res.setHeader('Content-Type', 'text/plain'); //seta o cabeçalho
  res.end('Hello World\n');  //metodo obrigatorio, fala que foi enviado tudo que deveria, pode deixar vazio ou mandar algum parametro
});


    //sobe o servidor usando o listen
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});