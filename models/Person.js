const mongoose = require('mongoose');

//Define Person Schema

const personSchema = new mongoose.Schema({ 
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    work:{
        type: String,
        enum:['Student','Employee','Businessman','Unemployed'],
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
});

// create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;