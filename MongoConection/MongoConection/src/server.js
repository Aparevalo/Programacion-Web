const http = require('http');

function startServer(htmlContent) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(htmlContent.toString());
    res.end();
  });

  server.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
  });
}

module.exports = { startServer };
