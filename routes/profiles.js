const express = require('express')
const router = express.Router()
const profiles = require('../database/controllers/profiles')




router.post('/profiles/create', (req, res) => {
    profiles.create(
        req.body.name, 
        req.body.admin,
        req.body.delete,
        req.body.update
        ).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/profiles/findall', (req, res) => {
    profiles.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/profiles/findOneById', (req,res) => {
    profiles.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/profiles/update', (req,res) => {
    profiles.update(req.body.id, req.body.name, req.body.admin, req.body.delete, req.body.update)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/profiles/destroy', (req, res) => {
    profiles.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router