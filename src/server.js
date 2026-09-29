const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('FUNCONANDO!')
})

app.listen(port, () => {
    console.log(`APLICATIVO RODANDO NA PORTA ${port}`)
})