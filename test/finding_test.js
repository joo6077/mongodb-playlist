const assert = require('assert')
const MarioChar = require('../models/mariochar')

// Describe tests
describe('Finding records', () => {

    beforeEach((done) => {
        const char = new MarioChar({
            name: 'Mario',
        })
        char.save()
            .then(() => {
                done()
            })
    })

    // Create tests
    it('Finds one record from the database', (done) => {

    })
})