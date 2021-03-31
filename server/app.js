require('dotenv').config()
const express = require('express')
const expressLoader = require('./_loader/express.loader')
const indexRoute = require('./_route/index.route')


//Loader
const app = express()

//Express Loader
expressLoader(app)

//Routes Index
indexRoute(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});