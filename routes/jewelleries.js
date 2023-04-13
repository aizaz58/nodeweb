const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/jewelleries(.html)?$', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'jewelleries.html'))
})

module.exports = router