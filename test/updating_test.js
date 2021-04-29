const assert = require('assert')
const MarioChar = require('../models/mariochar')

// Describe tests
describe('Updating records', () => {

    let char

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        })
        char.save()
            .then(() => {
                done()
            })
    })

    // Create tests
    it('Updates one record from the database', (done) => {
        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' })
            .then(() => {
                MarioChar.findOne({ _id: char._id })
                    .then((result) => {
                        assert(result.name === 'Luigi')
                        done()
                    })
            })
    })

    it('Increments the weight by 1', (done) => {
        MarioChar.updateOne({}, {$inc: { weight: 1 }})
            
    })
})