import {ValidationError, UniqueConstraintError} from 'sequelize/lib/errors';
import FieldsValidationError from '../errors/FieldsValidationError';
import PageNotFoundError from '../errors/PageNotFoundError';
import RecordNotFoundError from '../errors/RecordNotFoundError';
import UnhandledError from '../errors/UnhandledError';

export default function errorHandler(err, req, res, next) {
  let status;

  if (err instanceof PageNotFoundError) {
  } else if (err instanceof RecordNotFoundError) {
  } else if (err instanceof ValidationError) {
    err = new FieldsValidationError().loadError(err);
  } else if (err instanceof UniqueConstraintError) {
    err = new FieldsValidationError().loadError(err);
  } else {
    console.log(err);
    err = new UnhandledError(err);
  }

  return res.status(err.status).json({error: err});
};
