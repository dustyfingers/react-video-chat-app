const express = require('express')
const http = require('http')
const socket = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socket(server)

server.listen(5000, () => console.log('server is running on port 5000'))