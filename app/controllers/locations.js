import {Location} from '../models';
import RecordNotFoundError from '../errors/RecordNotFoundError';

function index(req, res, next) {
  Location.findAll().then((locations) => {
    res.json(locations);
  }).catch(next);
}

function show(req, res, next) {
  Location.findById(req.params.id).then((location) => {
    if (!location) throw new RecordNotFoundError();
    res.json(location);
  }).catch(next);
}

function create(req, res, next) {
  Location.create(req.body).then((location) => {
    res.json(location);
  }).catch(next);
}

export default {index, show, create};
