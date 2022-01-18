const express = require('express')
const server = express()

server.listen(3000)

server.get('/hombres', (req, res) =>{
    return res.json({message: 'Hi world'})
})
