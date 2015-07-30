import RecordNotFoundError from '../errors/RecordNotFoundError';

const PER_PAGE = 2;

export default {index, show, create, update, destroy};

function index(req, res, next) {
  let offset = Math.max(0, req.query.offset);
  let limit = Math.min(PER_PAGE, req.query.limit);

  req.user.getProjects({offset, limit}).then(projects => {
    res.status(200).json(projects);
  }).catch(next);
}

function show(req, res, next) {
  getProject(req).then(project => {
    res.status(200).json(project);
  }).catch(next);
}

function create(req, res, next) {
  req.user.createProject(req.body).then(project => {
    res.status(201).json(project);
  }).catch(next);
}

function update(req, res, next) {
  getProject(req).then(project => {
    return project.update(req.body);
  }).then(project => {
    res.status(200).json(project);
  }).catch(next);
}

function destroy(req, res, next) {
  getProject(req).then(project => {
    return project.destroy();
  }).then(project => {
    res.status(200).end();
  }).catch(next);
}

function getProject(req) {
  return req.user.getProjects({where: {id: req.params.id}, limit: 1}).then((projects) => {
    if (!projects[0]) throw new RecordNotFoundError();
    return projects[0];
  });
}
