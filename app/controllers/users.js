import {User} from '../models';
import Jwt from '../lib/Jwt';
import UnauthenticatedError from '../errors/UnauthenticatedError';

export default {login, signup};

function login(req, res, next) {
  User.findOne({where: {username: req.body.username}}).then(user => {
    if (!user) throw new UnauthenticatedError();
    return user.authenticate(req.body.password);
  }).then(user => {
    user = user.toJSON();
    user.accessToken = Jwt.generate({userId: user.id});
    res.status(200).json(user);
  }).catch(next);
}

function signup(req, res, next) {
  User.create(req.body).then(user => {
    res.status(201).json(user);
  }).catch(next);
}
