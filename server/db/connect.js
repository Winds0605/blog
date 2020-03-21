const mongoose = require('mongoose');
const colors = require('colors')
const db = require('./config').mongoURI

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected :)".bgMagenta))
    .catch(err => {
        console.log(`${err}`.bgRed);
    })
