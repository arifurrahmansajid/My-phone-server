const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('My phone server Comming ')
})
app.get('/phones', (req, res) => {
  res.send(phones);
})

app.get('/phones/:id',(req, res) => {
  const id = req.params.id;
  console.log('i need data for id:', id);
  res.send(phones);
})

app.listen(port, () => {
  console.log(`My phone server is running on port: ${port}`)
})