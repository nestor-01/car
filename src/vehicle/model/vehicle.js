const {Schema, mongoose} = require('mongoose');

const vehicleSchema = new Schema({
    UUID: String,
    VIN: String,
    make: String,
    model: String,
    mileage: Number,
    year: Number,
    price: Number,
    zipCode: Number,
    createdDay: {
        type: Date, 
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('vehicle', vehicleSchema);
