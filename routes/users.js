const express = require('express')
const router = express.Router()
const users = require('../database/controllers/users')


router.post('/users/create', (req, res) => {
    users.create(req.body.user, req.body.pass, req.body.name, req.body.profile_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/findOneByUser', (req, res) => {
    users.findOneByUser(req.body.user)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/users/findAll', (req,res) => {
    users.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/findOneById', (req, res) => {
    users.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/destroy', (req,res) => {
    users.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/updatePass', (req, res) => {
    users.updatePass(req.body.id, req.body.pass)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})
router.post('/users/updateProfile', (req, res) => {
    users.updateProfile(req.body.id, req.body.profile_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



module.exports = router