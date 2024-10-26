const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, "css")));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/*', (req, res) => {
    res.sendFile('index.html',{root: path.join(__dirname)})
})

app.post('/registration', (req, res) => {
    console.log(">>>>>",req.body)
    fs.appendFile('data.txt',JSON.stringify(req.body)+"\n",(err) => {
        if (err)
        {
            const errorPage = `
                <!DOCTYPE html>
                <html lang="ru">
                    <head>
                        <meta charset="UTF-8">
                        <title>Ошибка добавления пользователя</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                padding-top: 50px;
                            }
                            h1 {
                                color: red;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Ошибка добавления пользователя</h1>
                        <p>Произошла ошибка при сохранении данных.</p>
                    </body>
                </html>
            `;
            res.status(500).send(errorPage)
        }
        else{
            const successPage = `
            <!DOCTYPE html>
            <html lang="ru">
                <head>
                    <meta charset="UTF-8">
                    <title>Успех</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            text-align: center;
                            padding-top: 100px;
                        }
                        h1 {
                            color: green;
                        }
                    </style>
                </head>
                <body>
                    <h1>Пользователь успешно добавлен</h1>
                    <p>Благодарим за использование нашего сервиса!</p>
                </body>
            </html>
            `;
            res.status(201).send(successPage)

        }
    })
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})