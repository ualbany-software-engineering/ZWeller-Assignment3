const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("refresh")
    res.render("App")
})

app.listen(3000)
