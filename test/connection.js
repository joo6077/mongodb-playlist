const mongoose = require('mongoose')

// Connect to the db before tests run
before((done) => {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.connection.once('open', () => {
        console.log('Connection has been made, now make fireworks...');
        done()
    }).on('error', (error) => {
        console.log('Connection error: ', error);
    })
})

// Drop the characters collection before each test
beforeEach((done) => {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(() => {
        done()
    })
})