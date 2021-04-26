require('dotenv').config()
const express = require('express')
const expressLoader = require('./_loader/express.loader')
const indexRoute = require('./_route/index.route')
const socketLoader = require('./_loader/socket.loader')


//Loader
const app = express()

//Express Loader
expressLoader(app)

//Routes Index
const http = require('http').Server(app);
indexRoute(app)
const io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

socketLoader(io)
const PORT = process.env.PORT || 8000;
http.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});