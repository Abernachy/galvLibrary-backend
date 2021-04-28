const express = require('express')
const cors = require('cors')
const app = express()



// app modifications
app.use(express.json())
app.use(cors())

//mock data
const books =require("../mockdata/books.json")
const users = require("../mockdata/users.json")
const checked_out = require("../mockdata/check_out.json")

app.get('/api/books', (req, res) => {
    res.json(books)
})

app.get("/api/books/:id", (req,res) => {
    let book_id = req.params.id
    
    // is the book checked out?
    let status = books[book_id].checked_out
    if (status == false){
    res.json(books[book_id])
    }
})



// Error Handling


module.exports = app


// Notes for my own edumacation
/*
https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf
When deciding between using res.send and res.json() , res.json will convert non objects  and other things that are not in json format into a json formatted object.  res.send will not convert them.


*/
