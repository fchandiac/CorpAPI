const express = require('express')
const router = express.Router()
const records = require('../database/controllers/records')

router.post('/records/create', (req, res) => {
    records.create(req.body.table, req.body.action, req.body.description, req.body.user_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/records/findAll', (req, res) => {
    records.findAll({})
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router