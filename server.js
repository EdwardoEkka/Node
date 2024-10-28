const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the response status to OK
  res.setHeader('Content-Type', 'text/html'); // Set content type
  res.end('<p>Hello, World!</p>'); // Send the response
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
