import express from 'express';
import setAccessToken from './middlewares/setAccessToken'
import setUserFromAccessToken from './middlewares/setUserFromAccessToken'
import requireAuthentication from './middlewares/requireAuthentication'
import users from './controllers/users';
import projects from './controllers/projects';

let authenticate = [setAccessToken, setUserFromAccessToken, requireAuthentication];
let router = express.Router();

router.route('/login')
  .post(users.login);
router.route('/signup')
  .post(users.signup);
router.route('/me')
  .get(authenticate, users.me);

router.route('/projects')
  .get(authenticate, projects.index)
  .post(authenticate, projects.create);
router.route('/projects/:id')
  .get(authenticate, projects.show)
  .put(authenticate, projects.update)
  .delete(authenticate, projects.destroy);

export default router;
