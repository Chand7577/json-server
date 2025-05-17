// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('jobs.json');  
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());

server.use(middlewares);

server.use('/api', router);  // You can change '/api' to whatever base path you prefer

// Start the server on a specific port (e.g., 3000)
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
