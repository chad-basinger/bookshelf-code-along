const express = require('express')
//use books controller .js modules
const bc = require('../controllers/books_controller.js')
const app = express()

app.use(express.json())

app.get(`/api/books`, bc.read)

//use bc.{method}
app.post(`/api/books`, bc.create)

app.put(`/api/books/:id`, bc.update)

app.delete(`/api/books/:id`, bc.delete)


const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`))