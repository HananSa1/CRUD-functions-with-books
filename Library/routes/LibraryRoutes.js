const express=require('express');
const fs=require('fs');
const LibraryRoutes=express.Router();

const dataPath = './db.json' ;

// util functions
const saveBooktData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getBookData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

//create
LibraryRoutes.post('/books/addBook', (req, res) => {
 
    var existBooks = getBookData()
    const Id = Math.floor(100000 + Math.random() * 900000)
 
    existBooks[Id] = req.body
   

    saveBooktData(existBooks);
    res.send({success: true, msg: 'The book added successfully'})
})


// Read 
LibraryRoutes.get('/books/list', (req, res) => {
    const books = getBookData()
    res.send(books)
  })

//update
  LibraryRoutes.put('/books/update/:id', (req, res) => {
    var existBooks = getBookData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const BookId = req.params['id'];
      existBooks[BookId] = req.body;
      saveBooktData(existBooks);
      res.send(`Book with id ${BookId} has been updated`)
    }, true);
  });

  //delete

  LibraryRoutes.delete('/books/delete/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      var existBooks = getBookData()
      const BookId = req.params['id'];
      delete existBooks[BookId]; 
      saveBooktData(existBooks);
      res.send(`Book with id ${BookId} has been deleted`)
    }, true);
  })

module.exports=LibraryRoutes;