export default class UnhandledError extends Error {
  constructor(message, options) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message;
    this.options = options;
  }
}
