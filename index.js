const express = require('express')
const cors = require('cors')
const app = express()
const knex = require('knex')(require('./knexfile.js')['development'])



// app modifications
app.use(express.json())
app.use(cors())

//mock data
const books =require("../mockdata/books.json")
const users = require("../mockdata/users.json")
const checked_out = require("../mockdata/check_out.json")


app.get('/', (req,res) => {
    res.send('Hi')
})


app.get('/api/books', (req, res) => {
    // For now until I can figure out join queries and all that
    knex.select().from("books")
    .then(data => res.status(200).json(data))
})

app.get("/api/books/:id", (req,res) => {
    let book_id = req.params.id
    knex.select().from('books').where({books_id:book_id})
    .then(data => res.status(200).json(data))
    
  
})



// Error Handling


module.exports = app


// Notes for my own edumacation
/*
https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf
When deciding between using res.send and res.json() , res.json will convert non objects  and other things that are not in json format into a json formatted object.  res.send will not convert them.


*/
