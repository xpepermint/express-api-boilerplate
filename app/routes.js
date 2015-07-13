import express from 'express';

let router = express.Router();
let locations = require('./controllers/locations');

router.route('/locations').get(locations.index);
router.route('/locations/:id').get(locations.show);

export default router;
