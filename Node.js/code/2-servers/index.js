const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end("Hello! Sir Issac Newton is your friend!"); // endicate that the respones is complete and ready to be sent
});

server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
