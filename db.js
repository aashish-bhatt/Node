// Define mongoose and mongoUrl
const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.DB_URL;

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