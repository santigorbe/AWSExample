const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Hola mundo')
})

app.listen('3000', (req,res) => {
    console.log('** Server on port 3000: http://localhost:3000 **')
})