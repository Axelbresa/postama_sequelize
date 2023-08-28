const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get("/", (req, res)=>{
    res.send("hola")
})
// INDEX /api/posts
router.get('/apis', (req, res) => {
    Post.findAll().then(posts => {
        res.json(posts);
    })
})

router.get('/api', (req, res) => {
    Post.findOne().then(posts => {
        res.json(posts);
    })
})

// CREATE
router.post('/api', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        contenido: req.body.contenido
    }).then(post => {
        res.json(post);
    })
});

// READ /api/posts/:id
router.get('api/:id', (req, res) => {
    Post.findByPk(req.params.id).then(post => {
        res.json(post);
    })
});

// UPDATE /api/posts/:id
router.put('api/:id', (req, res) => {
    Post.update({
        titulo: req.body.titulo,
        contenido: req.body.contenido
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