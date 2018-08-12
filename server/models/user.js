const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({

    // Cria o Schema dos user e do Admin
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

mongoose.model('User', userSchema);