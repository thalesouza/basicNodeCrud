const express = require('express')
const server = express()

const hombres = ['Santa', 'Intel']

server.use(express.json())

function checkUserInArray(req, res, next){
    const hombre = hombres[req.params.index]
    if (!hombre){
        return res.status(400).json({error: 'hombre does not exist'})
    }
    req.hombre = hombre
    return next()
}

server.get('/hombres', (req, res) =>{
    return res.json(hombres)
})

server.get('/hombres/:index', checkUserInArray, (req, res) =>{
    return res.json(req.user)
})

server.post('/hombres', (req, res) =>{
    const {name} = req.body
    hombres.push(name)

    return res.json(hombres)
})

server.put('/hombres/:index', (req, res) => {
    const {index} = req.params
    const {name} = req.body

    hombres[index] = name
    return res.json(hombres)
})

server.delete('/hombres/:index', (req, res) => {
    const {index} = req.params

    hombres.splice(index, 1)

    return res.send()
})

server.listen(3000)
