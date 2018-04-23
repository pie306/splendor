const { hello } = require('./hello');
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('Helloish'))
app.get('/test', hello)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
