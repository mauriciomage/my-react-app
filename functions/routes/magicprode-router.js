const express = require('express')

const MagicProdeCtrl = require('../controllers/magicprode-ctrl')

const router = express.Router()

router.post('/user', MagicProdeCtrl.createExpense)
// router.put('/expense/:id', ExpenseCtrl.updateExpense)
// router.delete('/expense/:id', ExpenseCtrl.deleteExpense)
// router.get('/expense/:id', ExpenseCtrl.getExpenseById)
// router.get('/expenses', ExpenseCtrl.getExpenses)

module.exports = router;