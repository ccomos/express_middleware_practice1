// app.js
const express = require('express')
const app = express()
const port = 3000


const myLogger = function (req, res, next) {
  const DateNow = new Date()
  console.log(DateNow.toLocaleString(), '|', req.method, 'from', req.originalUrl)
  next();
};

app.use(myLogger);

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send(`
  <div>新增 Todo 頁面</div>
  <form action="/" method="POST">
    <button type"submit">Creat</button>
  </form>`)
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})