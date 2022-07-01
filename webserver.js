const express = require('express')
var config = require('./config.json');




const parseIp = (req) =>
    req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress

const server = express()
server.set('view engine', 'hbs')
server.get('/', (req, res) => {
    console.log(parseIp(req), '- Got the session')
    res.render('index')
})


server.listen(config.port)
console.log('Server started on port:' , config.port)