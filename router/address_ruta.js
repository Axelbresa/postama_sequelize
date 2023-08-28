const express = require('express');
const router = express.Router();
const Address = require('../models/address');
const User = require('../models/user');

router.get('/', (req, res) => {
    Address.findAll({
        include: {
            model: User,
            as: "residente",
            attributes: ['name', 'age']
        }
    }).then(addresses => res.json(addresses));
});

module.exports = router;