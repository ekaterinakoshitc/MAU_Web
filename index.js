const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json())
app.use(express.static(path.join(__dirname, './css')));

app.get('/*', (req, res) => {
    res.sendFile('index.html',{root: path.join(__dirname)});
})

app.post('/registration', (req, res) => {
    res.send('Hi, Get)!');
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})