const io = require("socket.io");
const server = io.listen(3000);

server.on("connection", function (socket) {
    
    console.log("CONECTADO");
    socket.on('refrescar', ()=>{
        socket.broadcast.emit('refrescar');
    });

    socket.on("disconnect", () => {
        console.log("desconectado");
    });
});
