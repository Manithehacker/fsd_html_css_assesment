import { createServer } from 'http';
const host='localhost';
const port=8000;

const requestListener=function(req,res){
    res.writeHead(200);
    res.end("This is server");
}

const server =createServer(requestListener);
server.listen(port,host, () =>{
    console.log("server is running")
});