const net = require("net");

function zeroFill(number) {
  return number < 10 ? "0" + number : number;
}

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = zeroFill(now.getMonth() + 1); // Adding 1 because months are zero-indexed
  const day = zeroFill(now.getDate());
  const hours = zeroFill(now.getHours());
  const minutes = zeroFill(now.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer(function (socket) {
  socket.write("HTTP/1.1 200 OK\n\n");
  socket.end(getCurrentDateTime() + "\n");
});

const port = process.argv[2] || 8000; // Use the provided port or default to 8000
server.listen(port);
console.log(`TCP time server is listening on port ${port}`);
