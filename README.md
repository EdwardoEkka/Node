## Getting started with Node 

### What is Node.js?

## 1. High Performance with V8 Engine  
- Node.js leverages Google’s V8 engine, compiling JavaScript to machine code for fast execution.  
- Ideal for handling backend tasks requiring speed, such as processing API requests or database interactions.

## 2. Non-Blocking I/O for Scalability  
- The event-driven, asynchronous I/O model allows Node.js to handle multiple requests simultaneously without blocking.  
- Perfect for real-time applications like chat systems, streaming platforms, or APIs.

## 3. Microservices Architecture and APIs  
- Node.js supports microservices, helping build modular and scalable backend systems.  
- Great for developing RESTful or GraphQL APIs that serve data efficiently.

## 4. Single Language Full-Stack Development  
- Using JavaScript for both frontend and backend ensures seamless integration and code reuse.  
- Reduces complexity by allowing developers to focus on a single language throughout the stack.

## 5. NPM (Node Package Manager) and Dependencies Management  
- NPM provides access to thousands of libraries, making it easy to integrate tools for authentication, database connectors, or caching.  
- Saves development time by offering pre-built solutions like JWT, Prisma, or Redis.

## 6. Real-Time Data Handling  
- Node.js is ideal for backend services requiring **real-time communication** (e.g., using WebSockets).  
- Commonly used for collaborative tools, messaging systems, and live updates.

## 7. Easy Handling of JSON  
- Native support for JSON makes it perfect for building **RESTful APIs** and working with **NoSQL databases** like MongoDB.  
- Facilitates seamless data exchange between the backend and frontend.

## 8. Cross-Platform Development  
- With tools like **Electron** and **Express.js**, developers can extend their backend code to create cross-platform desktop applications.  
- Node.js backend services can run smoothly on various operating systems.

## 9. Cloud-Friendly and Lightweight  
- Node.js works well with **Docker** and **Serverless** frameworks, making it a good fit for cloud platforms like AWS Lambda and Azure Functions.  
- Its lightweight nature allows easy deployment of backend services.

## 10. Community Support and Ecosystem  
- Node.js has a vibrant community with regular updates and active support.  
- Backend-specific frameworks like **Express.js, Nest.js**, and **Koa** boost productivity and simplify development.

---

## Conclusion  
Node.js offers a high-performance, scalable, and efficient environment for backend development. With its non-blocking I/O model, rich package ecosystem, and real-time capabilities, Node.js is an excellent choice for building modern web, mobile, and cloud applications.


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