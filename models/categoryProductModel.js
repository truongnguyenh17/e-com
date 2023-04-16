const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var categoryPoductSchema = new mongoose.Schema(
{
    title:{
        type:String,
        unique:true,
        required:true,
        index: true,
    },
},
{
    timestamps: true,
}
);

//Export the model
module.exports = mongoose.model('CategoryPoduct', categoryPoductSchema);