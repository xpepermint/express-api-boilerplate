import PageNotFoundError from '../errors/PageNotFoundError';
import RecordNotFoundError from '../errors/RecordNotFoundError';
import UnhandledError from '../errors/UnhandledError';

export default function errorHandler(err, req, res, next) {
  let status;

  if (err instanceof PageNotFoundError) {
    status = 404;
  } else if (err instanceof RecordNotFoundError) {
    status = 404;
  } else {
    status = 500;
    err = new UnhandledError(err.message);
  }

  return res.status(status).json({error: err});
};
