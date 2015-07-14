import express from 'express';

import locations from './controllers/locations';

let router = express.Router();

router.route('/locations')
  .get(locations.index)
  .post(locations.create);
router.route('/locations/:id')
  .get(locations.show)
  .put(locations.update)
  .delete(locations.destroy);

export default router;
