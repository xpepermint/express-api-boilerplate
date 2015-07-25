import express from 'express';
import setAccessToken from './middlewares/setAccessToken'
import setUserFromAccessToken from './middlewares/setUserFromAccessToken'
import requireAuthentication from './middlewares/requireAuthentication'
import users from './controllers/users';
import locations from './controllers/locations';

let authenticate = [setAccessToken, setUserFromAccessToken, requireAuthentication];
let router = express.Router();

router.route('/login')
  .post(users.login);
router.route('/signup')
  .post(users.signup);
router.route('/locations')
  .get(authenticate, locations.index)
  .post(authenticate, locations.create);
router.route('/locations/:id')
  .get(authenticate, locations.show)
  .put(authenticate, locations.update)
  .delete(authenticate, locations.destroy);

export default router;
