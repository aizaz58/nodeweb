const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/cart(.html)?$', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'cart.html'))
})

module.exports = router