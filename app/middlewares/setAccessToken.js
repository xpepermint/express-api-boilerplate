import Jwt from '../lib/Jwt';

export default (req, res, next) => {
  if (req.accessToken) return next();

  let token = req.query.accessToken || Jwt.parseHeader(req.headers.authorization);
  if (!token) return next();

  let payload = Jwt.verify(token);
  if (!payload) return next();

  req.accessToken = payload;
  next();
};
