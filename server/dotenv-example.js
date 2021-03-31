console.log('No value for FOO yet:', process.env.ACCESS_TOKEN_SECRET);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

console.log('Now the value for FOO is:', process.env.ACCESS_TOKEN_SECRET);