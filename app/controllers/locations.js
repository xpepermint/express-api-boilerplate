export function index(req, res, next) {
  res.json({description: `List of locations.`});
};

export function show(req, res, next) {
  res.json({description: `Location #id: ${req.params.id}`});
};
