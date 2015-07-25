import {User} from '../models';

export default (req, res, next) => {
  if (req.user) return next();
  if (!req.accessToken || !req.accessToken.userId) return next();

  User.findById(req.accessToken.userId).then(user => {
    if (user) req.user = user;
    next();
  }).catch(next);
};
