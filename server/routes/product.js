const express = require('express')
const router = express.Router
const { create } = '../controllers/product'

router.post('/product/add', create)