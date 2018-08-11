
// config do mongo
const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.Promise = global.Promise;

// Link do Compass q fiz
mongoose.connect("mongodb://localhost:27017/Xfind", { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // Tamo on!
  console.log('Tudo certin')
});

