const express = require('express');
const router = express.Router();
const User = require('../models/user');
//const Address = require('../models/address');

router.get('/apis', (req, res) => {
    User.findAll().then(users => res.json(users));
});

// CREATE /api/users
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    })
});

router.get('/api', (req, res) => {
    Post.findOne().then(posts => {
        res.json(posts);
    })
})

// CREATE
router.post('/', (req, res) => {
    Post.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then(post => {
        res.json(post);
    })
});

// READ /api/posts/:id
router.get('/:id', (req, res) => {
    Post.findByPk(req.params.id).then(post => {
        res.json(post);
    })
});

// UPDATE /api/posts/:id
router.put('/:id', (req, res) => {
    Post.update({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/posts/:id
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});



module.exports = router;