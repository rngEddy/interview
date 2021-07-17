const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000)
//app.use(cors({origin: 'http://localhost:4200'}))

const Result = require('./results')
const { mongoose } = require('./database')
const hasMutation = require('./mutation')



app.post('/mutation', async (req, res) => {
  
    let body = req.body
    let dna = body.dna
    let d = new Date()

    let hasMutated = hasMutation(dna)
    let entry = {dna, mutation : hasMutated, date: d.toDateString()}
    const r = new Result(entry)
    await r.save()

    if(hasMutated)
        return res.status(200).send("it is mutated")
    else
        return res.status(403).send("isn't mutated")
    
})

app.get('/api/stats', async (req, res) => {

    var count_mutation
    var count_no_mutation
    await Result.count({mutation : false}, function( err, count){
      count_no_mutation = count
    })
    await Result.count({mutation : true}, function( err, count){
      count_mutation = count
    })
    res.json({
        "count_mutation" : count_mutation, "count_no_mutation" : count_no_mutation, "ratio" : ((count_mutation*100)/(count_no_mutation+count_mutation))/100
    })
})

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
