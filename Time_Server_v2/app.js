const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/api/currenttime") {
    const currentTime = new Date();
    const responseData = {
      year: currentTime.getFullYear(),
      month: currentTime.getMonth() + 1,
      date: currentTime.getDate(),
      hour: currentTime.getHours(),
      minute: currentTime.getMinutes(),
    };

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
