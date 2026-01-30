const WebSocket = require("http");
const server = require("http").createServer();
const wss = new WebSocket.Server({ server });
const PORT = 8080;


wss.on("connection",ws =>{
    console.log("client connected")


        ws.on("message",message=>{
            wss.clients.forEach(client =>{
                if(client.readyState === WebSocket.OPEN){
                    client.send(message.toString());
                }
            })
        })


})
ws.on("close", () => {
        console.log("Client disconnected");
    });

server.listen(PORT,()=>{
    console.log(`websocket server on http://localhost:${PORT}`)
})