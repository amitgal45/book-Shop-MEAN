const BookController = require('../_controller/book.controller')
const express = require('express')
const router = express.Router()

// AUTH
const AuthGuard = require('../_service/auth.service')

router.get('/',BookController.getAllBooks)
router.get('/:id',BookController.getBookByID)
// router.put('/',)
router.post('/',BookController.addBook)

module.exports = router;