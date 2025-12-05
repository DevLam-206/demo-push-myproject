const express = require('express')//Common.js
const path = require('path')
const app = express()//App cua express 
const port = 8080//Port


//Config template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//Khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('check ABC')
})

app.get('/st', (req, res) => {
    //res.send('<h1>Stranger Thing</1>')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
