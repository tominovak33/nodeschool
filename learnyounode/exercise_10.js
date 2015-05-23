var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
    // socket handling logic
    socket.end(getFormattedDate());
});

function getFormattedDate() {
    var unformatted_date = new Date();
    var year = unformatted_date.getFullYear();
    var month = padNumbers(unformatted_date.getMonth()+1);
    var day = padNumbers(unformatted_date.getDate());
    var minutes = padNumbers(unformatted_date.getMinutes());
    var hours = padNumbers(unformatted_date.getHours());
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + "\n";
}

function padNumbers (number) {
    return (("0" + number).slice(-2));
}

server.listen(Number(port));