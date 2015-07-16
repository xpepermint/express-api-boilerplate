import Token from '../lib/Token';
import UnauthenticatedError from '../errors/UnauthenticatedError';

export default (req, res, next) => {
  if (req.accessToken) return next();

  let token = req.query.accessToken || Token.parseHeader(req.headers.authorization);
  Token.verify(token).then((payload) => {
    if (payload.userId) { // validate user
      req.accessToken = payload
      next();
    } else {
      next(new UnauthenticatedError());
    }
  }).catch(next);
};
