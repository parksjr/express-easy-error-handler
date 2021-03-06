class HttpError {
  constructor(message, statusCode, innerError) {
    if (!message) {
      throw new Error('HttpError constructor expects at least a message as an argument. Please refer to documentation at http://somewhere.out.there');
    }
    this.message = (message);
    this.statusCode = statusCode || 500;
    this.innerError = innerError || {};
  }
  static notFoundError(msg) {
    msg = msg || '404 Not Found.';
    return new HttpError(msg, 404);
  }
  static notAuthorizedError(msg) {
    msg = msg || 'Not Authorized';
    return new HttpError(msg, 401);
  }
  static invalidRequestError(msg) {
    msg = msg || 'Invalid request.';
    return new HttpError(msg, 400);
  }
  static forbiddenError(msg) {
    msg = msg || 'Forbidden.';
    return new HttpError(msg, 403);
  }
}

export default HttpError;