export default class AccessTokenError extends Error {
  constructor(message, status) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || 'Access token is not valid.';
    this.status = status || 401;
  }
}
