import HttpError from '../models/error.http';
const node_env = process.env.NODE_ENV;

export function ErrorHandler(err, req, res, next) { //  eslint-disable-line
  if (!err) {
    err = HttpError.notFoundError();
  }

  const error = {
    message: err.message || 'Internal Server Error.',
  };
  if (node_env !== 'prod') {
    error.stack = err.stack;
  }

  if (err.errors) {
    error.errors = {};
    const { errors } = err;
    for (const type in errors) {
      if (type in errors) {
        error.errors[type] = errors[type].message;
      }
    }
  }
  err.statusCode = err.statusCode || 500;

  //todo: come up with a way to customize the response
  return res.status(err.statusCode).json({
    message: error.message,
    error: error,
    title: 'error'
  });
}
export function NotFoundHandler(req, res, next) {
  next(HttpError.notFoundError());
}