const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require('../controllers/book.controller')

const router = require('express').Router()


router.route("/books",).get(fetchBooks).post(addBook)
// if someone routes to /books with a get request it will execute fetchBooks(), if post request then addBook()

router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)
// if someone routes to books/:id with Delete request then deleteBook() and it someone sends patch request then editBook()



module.exports = router