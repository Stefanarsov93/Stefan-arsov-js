const mongoose = require('mongoose');

const host = 'localhost:27017'
const username = 'stefan';
const password = 'stefan123';
const dbname = 'g16';

let DSN = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    DSN, //{ useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            return console.log('Could not connect to DB:', err);
        }
        console.log('Successfully conneted to DB');
    }
);