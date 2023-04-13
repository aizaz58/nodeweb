const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/login(.html)?$', async(req, res) => {
    const {user}=await req.body
    console.log(req.url)
    console.log(user)
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
})

module.exports = router