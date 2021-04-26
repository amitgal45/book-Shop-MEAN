const ChatController = require('../_controller/chat.controller')
const express = require('express')
const router = express.Router()

// AUTH
const AuthGuard = require('../_service/auth.service')

// router.get('/',AuthGuard.isVerify,BookController.getAllBooks)
router.get('/id/:chatid/:userprofileid',ChatController.getChatByID)
router.get('/:userprofileid/:page',ChatController.getAllChats)

// router.put('/',)
// router.post('/',BookController.addBook)

module.exports = router;