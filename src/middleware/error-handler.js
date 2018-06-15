import HttpError from '../models/error.http';
const node_env = process.env.NODE_ENV.toUpperCase();

export function ErrorHandler(err, req, res, next) {
  if (!err) {
    err = HttpError.notFoundError();
  }

  const error = {
    message: err.message || 'Internal Server Error.',
  };
  if (node_env !== 'PROD') {
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

  if (typeof next === 'function') {
    return next(err);
  }
  else {
    return res.status(err.statusCode).json({
      message: error.message,
      error: error,
      title: 'error'
    });
  }
}