const mmongoose = require('mongoose');
const transectionSchema = new mmongoose.Schema({
    sender: {
        type: mmongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    receiver: {
        type: mmongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },

    amount:{
        type: Number,
        required: true,
        min: 0  
    },

    billerName: {
        type: String,
        required: true
    },

    types:{
        type: String,
        enum: ['TRANSFER','ADD_MONEY','WITHDRAW'],
        required: true
    },

status:{
    type: string,
    enum: ['PENDING','COMPLETED','FAILED'],
    default: 'PENDING'
},
timestamp:{
    type: Date,
    default: Date.now
}


});