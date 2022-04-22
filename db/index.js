const mongoose = require("mongoose")
require("dotenv").config()

MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

.then(() => {
    console.log("Connected to MongoDB")
})
.catch((e) => {
    console.log("Connection error", e.message)
})

const db = mongoose.connection
module.exports = db