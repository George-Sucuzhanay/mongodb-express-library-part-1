const express = require("express")
const bookModel = require("../models/book")
const app = express()

// getting our book data

// CRUD

// READ
app.get("/books", async (req,res) => {
    const books = await bookModel.find({})
    try{
        res.send(books)
    } catch(error){
        res.status(500).send(error)
    }
})
// CREATE
app.post("/book", async (req, res) => {
    const book = new bookModel(req.body);
    try{
        await book.save()
        response.send(book)
    }catch(error){
        response.status(500).send(error)
    }
})

// UPDATE
app.patch("/book/:id", async (request, response) => {
    try {
      await bookModel.findByIdAndUpdate(request.params.id, request.body);
      await bookModel.save();
      response.send(book);
    } catch (error) {
      response.status(500).send(error);
    }
});

// DELETE

app.delete("/book/:id", async (request, response) => {
    try {
      const book = await bookModel.findByIdAndDelete(request.params.id);
  
      if (!book) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app