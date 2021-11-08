const express = require('express');
const router = express.Router();

const books = require('../controller/book');

// router.get('/', books.listAllBooks)
// router.get('/', books.listOneBook)
router.get('/', books.paginate)
router.post('/', books.createBook)
router.put('/:id', books.updateBook)
router.delete('/:id', books.deleteBook)


module.exports = router