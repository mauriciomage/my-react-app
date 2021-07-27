const express = require('express')

const ExpenseCtrl = require('../controllers/expense-ctrl')

const router = express.Router()

router.post('/expense', ExpenseCtrl.createExpense)
router.put('/expense/:id', ExpenseCtrl.updateExpense)
router.delete('/expense/:id', ExpenseCtrl.deleteExpense)
router.get('/expense/:id', ExpenseCtrl.getExpenseById)
router.get('/expenses', ExpenseCtrl.getExpenses)

module.exports = router