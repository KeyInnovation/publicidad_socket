const io = require("socket.io");
const server = io.listen(4568);

server.on("connection", function(socket) {

    console.log("CONECTADO");
    socket.on('refrescar', (data) => {
        console.log("REFRESCAR");
        socket.broadcast.emit('refrescar', data);
    });

    socket.on("disconnect", () => {
        console.log("desconectado");
    });
});