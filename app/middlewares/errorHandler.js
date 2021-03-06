import AccessTokenError from '../errors/AccessTokenError';
import FieldsValidationError from '../errors/FieldsValidationError';
import PageNotFoundError from '../errors/PageNotFoundError';
import RecordNotFoundError from '../errors/RecordNotFoundError';
import UnauthenticatedError from '../errors/UnauthenticatedError';
import UnhandledError from '../errors/UnhandledError';
import sequelizeErrors from 'sequelize/lib/errors';

export default function errorHandler(err, req, res, next) {
  let status;

  if (err instanceof AccessTokenError) {
  } else if (err instanceof FieldsValidationError) {
  } else if (err instanceof PageNotFoundError) {
  } else if (err instanceof RecordNotFoundError) {
  } else if (err instanceof UnauthenticatedError) {
  } else if (err instanceof sequelizeErrors.ValidationError) {
    err = new FieldsValidationError().loadError(err);
  } else if (err instanceof sequelizeErrors.UniqueConstraintError) {
    err = new FieldsValidationError().loadError(err);
  } else {
    console.log(err);
    err = new UnhandledError(err);
  }

  return res.status(err.status).json({error: err});
};
