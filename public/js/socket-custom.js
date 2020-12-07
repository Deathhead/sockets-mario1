var socket = io();

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexion con el Servidor');
});

// Enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Mario',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchando Informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});