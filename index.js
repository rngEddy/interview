const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const hasMutation = require('./mutation')

app.post('/mutation', (req, res) => {
  
    let body = req.body
    let dna = body.dna

    let hasMutated = hasMutation(dna)
    if(hasMutated)
        return res.status(200).send("it is mutated")
    else
        return res.status(403).send("isn't mutated")

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
