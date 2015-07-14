export default class FieldsValidationError extends Error {
  constructor(fields, message, status) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.errors = Array.isArray(fields) ? fields : [fields];
    this.message = message || 'Validation failed.';
    this.status = status || 422;
  }

  loadError(err) {
    this.errors = {};
    err.errors.forEach((error) => {
      if (!this.errors[error.path]) this.errors[error.path] = [];
      this.errors[error.path].push(error.message);
    });
    return this;
  }
}
