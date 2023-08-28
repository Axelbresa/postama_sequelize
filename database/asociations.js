const Post = require('../models/post');
const Address = require('../models/address');
const User = require('../models/user');

// Uno a uno

// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.hasOne(Address)

// Añade una clave userId a la tabla addresses
Address.belongsTo(User)


