import {Location} from '../models';

function index(req, res) {
  Location.findAll().then((locations) => {
    res.json(locations);
  });
};

function show(req, res) {
  Location.findOne({id: req.params.id}).then((location) => {
    res.json(location);
  });
};

function create(req, res) {
  Location.create(req.body).then((location) => {
    res.json(location);
  });
};

export default {index, show, create};
