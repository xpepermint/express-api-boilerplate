import {Location} from '../models';
import RecordNotFoundError from '../errors/RecordNotFoundError';

function index(req, res, next) {
  Location.findAll().then((locations) => {
    res.status(200).json(locations);
  }).catch(next);
}

function show(req, res, next) {
  Location.findById(req.params.id).then((location) => {
    if (!location) throw new RecordNotFoundError();
    res.status(200).json(location);
  }).catch(next);
}

function create(req, res, next) {
  Location.create(req.body).then((location) => {
    res.status(201).json(location);
  }).catch(next);
}

function update(req, res, next) {
  Location.findById(req.params.id).then((location) => {
    if (!location) throw new RecordNotFoundError();
    return location.update(req.body);
  }).then((location) => {
    res.status(200).json(location);
  }).catch(next);
}

function destroy(req, res, next) {
  Location.findById(req.params.id).then((location) => {
    if (!location) throw new RecordNotFoundError();
    return location.destroy();
  }).then(() => {
    res.status(200).end();
  }).catch(next);
}

export default {index, show, create, update, destroy};
