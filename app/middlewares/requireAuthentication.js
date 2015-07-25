import UnauthenticatedError from '../errors/UnauthenticatedError';

export default (req, res, next) => {
  if (req.user) return next();
  next(new UnauthenticatedError());
};
