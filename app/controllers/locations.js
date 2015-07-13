import {Location} from '../models';

export function index(req, res, next) {
  Location.findAll().then((locations) => {
    res.json(locations);
  });
};

export function show(req, res, next) {
  Location.findOne({id: req.params.id}).then((location) => {
    res.json(location);
  });
};
