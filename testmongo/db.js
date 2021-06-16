const mongoose = require('mongoose')

mongoose
    //.connect('mongodb://127.0.0.1:27017/customers', { useNewUrlParser: true })
    .connect("mongodb+srv://Ayush:ayushiitb@30@cluster0.2utsm.mongodb.net/Resume_Builder?retryWrites=true&w=majority", { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
