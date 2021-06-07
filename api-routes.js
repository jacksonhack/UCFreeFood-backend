// api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to FoodRest',
    });
});

// Import location controller
var locationController = require('./locationController');

// Location routes
router.route('/locations')
    .get(locationController.index)
    .post(locationController.new);

router.route('/locations/:location_id')
    .get(locationController.view)
    .patch(locationController.update)
    .put(locationController.update)
    .delete(locationController.delete);

// Export API routes
module.exports = router;
