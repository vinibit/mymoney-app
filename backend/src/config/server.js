const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const server = express()
const port = 3003

// Middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

// Routes
server.get('/', (req, res) => {
    res.send('Hello World!')
})

// Start server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = server