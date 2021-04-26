const UserController = require('../_controller/user.controller')
const express = require('express')
const router = express.Router()

// AUTH
// const AuthGuard = require('../_service/auth.service')

// router.get('/',AuthGuard.isVerify,BookController.getAllBooks)
// router.get('/:id',UserController.getBookByID)
// router.put('/',)
// router.post('/',BookController.addBook)

module.exports = router;