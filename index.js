const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = 3000

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, './css')))

app.get('/*', (req, res) => {
    res.sendFile('index.html',{root: path.join(__dirname)})
})

app.post('/registration', (req, res) => {
    console.log(">>>>>",req.body)
    fs.appendFile('data.txt',JSON.stringify(req.body)+"\n",(err) => {
        if (err)
        {
            res.status(500).send("Пользователь не добавлен")
        }
        else{
            res.status(201).send("Пользователь  добавлен ")

        }
    })
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})