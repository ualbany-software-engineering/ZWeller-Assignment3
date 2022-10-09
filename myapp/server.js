
require('dotenv').config()
const { ADDRGETNETWORKPARAMS } = require('dns')
const express = require('express')
const app = express()


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public'))
app.use('/scss', express.static(__dirname + 'public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("App")
})

app.listen(3000)

app.get('/add/:firstNumber/and/:secondNumber', (req,res)=>{
    console.log(req.params.firstNumber + req.params.secondNumber);
    let firstNo = parseInt(req.params.firstNumber),
        secondNo = parseInt(req.params.secondNumber);
    res.json({"Addition" : firstNo + secondNo});
  });

