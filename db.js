// Define mongoose and mongoUrl
const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://admin-aashu:aashish123@cluster0.uu9ikme.mongodb.net/";

// SetUp MongodB connection
mongoose.connect(mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true});

// Access Default Connection Onject
const db =mongoose.connection;

// Add event listeners
db.on('error',console.error.bind(console,'connection error:'));
db.once('connected',()=>{console.log('Connected to MongoDB')});
db.once('disconnected',()=>{console.log('Disconnected from MongoDB')});

// export DB connection
module.exports = db;