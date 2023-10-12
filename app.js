const http = require('http');

const server = http.createServer((req, res) => {
  let writeHaedObject = {
    'Content-Type': 'text/plain'
  }
  res.writeHead(200, writeHaedObject);
  res.write("test");
  res.end();
});

server.listen(8080);