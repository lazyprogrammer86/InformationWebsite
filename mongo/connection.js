const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to mongoDB')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose.connection;