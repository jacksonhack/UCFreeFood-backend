// locationModel.js
var mongoose = require('mongoose');

// Setup schema
var locationSchema = mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    description: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Location model
var Location = module.exports = mongoose.model('location', locationSchema);

module.exports.get = function (callback, limit) {
    Location.find(callback).limit(limit);
}

