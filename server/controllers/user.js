const mongoose = require('mongoose');

const modelUser = mongoose.model('User');

const bcrypt = require('bcrypt');

let userController = {}

// todos os users
userController.allUsers = (req, res) => {

    modelUser.find()
        .then(results => res.json(results))

        .catch(err => res.send(err));

}
// Exporta para ser usado em newUser
module.exports = userController;