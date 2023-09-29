const http = require('http');
const fs= require('fs');
//Importa os módulos http e fs para o servidor

const server = http.createServer((req, res) => {
    //createServer cria o servidor local (http://localhost:xxxx)
    //criando uma função de requisição e respostas em http
    if(req.url === '/'){
        fs.readFile('index.html',(err,data)=>{
            //se for solicitado / vai abrir o arquivo index.html
            if(err){  //caso de erro
                res.writeHead(500) //Menssagem de erro
                res.end("Erro server"); //,enssagem Erro
            }else{  //caso tudo OK
                res.writeHead(200);
                res.end(data);  //retorna o index.html
            }
        })
    }else if(req.url==="/sobre"){
        //se for solicitado / sobre vai abrir o arquivo sobre.html 
        fs.readFile( 'sobre.html',(err,data)=>{
            if(err){  //caso de erro
            res.writeHead(500);  //menssagem de erro
            res.ed("Erro Server");
        }else{ //caso tudo ok
            res.writeHead(200);
            res.end(data);// retorna o index.html
        }
        })               
    }else{  //erro de página não encontrada
        res.writeHead(404);  //erro padrão 404
        res.end("Pagina nao encontrada"); //menssagem de erro
    }
});
server.listen(3000, ()=>{
    console.log("Servidor Conectado na porta 3000");
})