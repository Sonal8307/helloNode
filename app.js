const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Ee Salaa Cup Namde - India!!'))

app.listen(port, () => console.log(`No, No We are not 420!  ${port}!`))
