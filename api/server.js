const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));



server.get('/', async (req, res, next) => {
    //res.json('hello world')
    res.json({MESSAGE: process.env.MESSAGE});
});

module.exports = server; 