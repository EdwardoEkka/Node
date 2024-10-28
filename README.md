## Getting started with Node 

### What is Node.js?

- **JavaScript Runtime**: Node.js is built on the V8 JavaScript engine, which is developed by Google for Chrome.
- **Asynchronous and Event-Driven**: Node.js is designed to be non-blocking, meaning it can handle multiple connections simultaneously without getting blocked by any one operation.
- **NPM (Node Package Manager)**: Node.js comes with NPM, which is a powerful tool that allows you to manage dependencies and packages easily.
- **Rich Ecosystem**: There is a vast ecosystem of libraries and frameworks available for Node.js, making it versatile for various applications, from web servers to APIs and real-time applications.


### Creating a http server
- **Initialize your Node.js project**
  ```sh
  npm init -y
  ```
- **Create a server file (server.js or index.js)**
- **Import http module**
  ```sh
  const http = require('http');
  ```
- **Create a simple route which says Hello World!**
  ```sh
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  });
  ```
- **Define the port and run the server**
  ```sh
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
  ```
- **Run your server**
  ```sh
  node server_file_name.js
  ```