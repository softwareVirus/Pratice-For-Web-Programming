const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    input: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usera',userSchema);