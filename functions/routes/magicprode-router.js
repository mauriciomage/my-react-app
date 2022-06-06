const express = require('express')

const MagicProdeCtrl = require('../controllers/magicprode-ctrl')

const router = express.Router()

router.post('/user', MagicProdeCtrl.registration)
router.post('/login', MagicProdeCtrl.login)
router.get('/journey', MagicProdeCtrl.getJourneys)

module.exports = router;