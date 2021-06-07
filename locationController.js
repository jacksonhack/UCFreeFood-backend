// locationController.js
// Import location model
Location = require('./locationModel');
// Handle index actions
exports.index = function (req, res) {
    Location.get(function (err, locations) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Locations retrieved successfully",
            data: locations
        });
    });
};
// Handle create location actions
exports.new = function (req, res) {
    var location = new Location();
    location.foodName = req.body.foodName ? req.body.foodName : location.foodName;
    location.latitude = req.body.latitude;
    location.longitude = req.body.longitude;
    location.description = req.body.description;
// save the location and check for errors
    location.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: 'New location created!',
            data: location
        });
    });
};
// Handle view location info
exports.view = function (req, res) {
    Location.findById(req.params.location_id, function (err, location) {
        if (err)
            res.send(err);
        res.json({
            message: 'Location details loading..',
            data: location
        });
    });
};
// Handle update location info
exports.update = function (req, res) {
Location.findById(req.params.location_id, function (err, location) {
        if (err)
            res.send(err);
location.foodName = req.body.foodName ? req.body.foodName : location.foodName;
        location.latitude = req.body.latitude;
        location.longitude = req.body.longitude;
        location.description = req.body.description;
// save the location and check for errors
        location.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Location Info updated',
                data: location
            });
        });
    });
};
// Handle delete location
exports.delete = function (req, res) {
    Location.remove({
        _id: req.params.location_id
    }, function (err, location) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Location deleted'
        });
    });
};

