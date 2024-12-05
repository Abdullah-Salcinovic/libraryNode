const express = require('express');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

// Reordered routes
router.get('/', getAllBooks);
router.get('/new', (req, res) => {  // Move this before the /:id route
    console.log('Accessed /books/new');
    res.render('addBook');
});
router.get('/:id', getBookById);
router.post('/', createBook);
router.post('/new', createBook);
router.post('/:id/edit', updateBook);
router.get('/:id/delete', deleteBook);

module.exports = router;