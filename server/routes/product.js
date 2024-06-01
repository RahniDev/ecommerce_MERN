const express = require('express')
const router = express.Router
const { create } = '../controllers/product'

router.post('add-product', create)