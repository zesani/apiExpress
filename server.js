var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var data = [
  {
    name: 'Tak',
    phone: '02222222'
  },
  {
    name: 'kiti',
    phone: '09141305'
  },
  {
    name: 'eiei',
    phone: '0914135'
  }
]
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/data', function (req, res) {
  res.send(data)
})
app.post('/data', function (req, res) {
  data.push(req.body)
  console.log(req.body)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
