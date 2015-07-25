import RecordNotFoundError from '../errors/RecordNotFoundError';

const PER_PAGE = 2;

export default {index, show, create, update, destroy};

function index(req, res, next) {
  let offset = Math.max(0, req.query.offset);
  let limit = Math.min(PER_PAGE, req.query.limit);

  req.user.getLocations({offset, limit}).then(locations => {
    res.status(200).json(locations);
  }).catch(next);
}

function show(req, res, next) {
  getLocation(req).then(location => {
    res.status(200).json(location);
  }).catch(next);
}

function create(req, res, next) {
  req.user.createLocation(req.body).then(location => {
    res.status(201).json(location);
  }).catch(next);
}

function update(req, res, next) {
  getLocation(req).then(location => {
    return location.update(req.body);
  }).then(location => {
    res.status(200).json(location);
  }).catch(next);
}

function destroy(req, res, next) {
  getLocation(req).then(location => {
    return location.destroy();
  }).then(location => {
    res.status(200).end();
  }).catch(next);
}

function getLocation(req) {
  return req.user.getLocations({where: {id: req.params.id}, limit: 1}).then((locations) => {
    if (!locations[0]) throw new RecordNotFoundError();
    return locations[0];
  });
}
