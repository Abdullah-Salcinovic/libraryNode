const express = require('express');
const { getAllLoans, getLoanById, updateLoan, deleteLoan, createLoan } = require('../controllers/loanController');
const router = express.Router();

// Fetch all loans
router.get('/', getAllLoans);

// Fetch a specific loan (Edit Page)
router.get('/:id', getLoanById);

// Update loan details
router.post('/:id/edit', updateLoan);

// Delete a loan
router.get('/:id/delete', deleteLoan);

router.get('/new', (req, res) => res.render('addLoan')); // Render the add form
router.post('/new', createLoan); // Handle form submission

module.exports = router;
