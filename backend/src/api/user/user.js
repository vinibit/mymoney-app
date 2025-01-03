//const restful = require('node-restful')
//const mongoose = restful.mongoose
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, min: 6, max: 12, required: true }
})

//module.exports = restful.model('User', userSchema)
module.exports = mongoose.model('User', userSchema)
