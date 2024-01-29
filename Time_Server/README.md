# Time Server

## Step 1: Install Node.js on your computer
Download the LST version from [Node](https://nodejs.org/en)

## Step 2: Run the server on your local machine
```
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
```
<img width="465" alt="Screenshot 2024-01-28 at 5 02 50 PM" src="https://github.com/RuichenCN/Cloud_Computing_Infrastructure/assets/113652310/e3f1e969-5bf9-4aab-be90-f02252e505a5">

## Step 3: Client access
Open link http://localhost:8000 in Chrome browser

<img width="1440" alt="Screenshot 2024-01-28 at 5 04 19 PM" src="https://github.com/RuichenCN/Cloud_Computing_Infrastructure/assets/113652310/cc8e30db-ca96-442a-8af6-fe264ae88afe">
