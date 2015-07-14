export default class RecordNotFoundError extends Error {
  constructor(message, status) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || 'Record not found.';
    this.status = status || 404;
  }
}
