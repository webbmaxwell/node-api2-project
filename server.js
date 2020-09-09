const express = require('express');
const hubsRouter = require('./hubs/hubs-router.js')
// const usersRouter = require('./users/users-router.js)

const server = express();

server.use(express.json());
server.use('/api/hubs', hubsRouter);
// server.use('/my/new/mount/point', hubsRouter);
// server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
    `);
});

module.exports = server;