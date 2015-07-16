import express from 'express';
import requireAuthentication from './middlewares/requireAuthentication'
import locations from './controllers/locations';

let router = express.Router();

router.route('/locations')
  .get(locations.index)
  .post(requireAuthentication, locations.create);
router.route('/locations/:id')
  .get(locations.show)
  .put(requireAuthentication, locations.update)
  .delete(requireAuthentication, locations.destroy);

export default router;
