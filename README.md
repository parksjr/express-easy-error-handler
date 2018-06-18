# Express Easy Error Handler
Easy error model and handling middleware to use with express web apps.
## Install as a dependency in your express project
```sh
npm i -S express-easy-error-handler
```
## Using
Using middleware and HttpError model in your routes like so:

#### ES6
```javascript
import {Router} from 'express';
import HttpError, {ErrorHandler, NotFoundHandler} from 'express-error-handler';

const router = new Router();

//
//  typical application routes go here

//  send error from route
router.get('/error', (req, res, next) {
  var error = new HttpError('This is a custom error');
  next(error);
});

//
//  place error handlers after all routes, 
//  will send json response of error object by default
router.use(NotFoundHandler, ErrorHandler);
```

## Contributing
clone the repo, source code is in the src directory, make your changes, test and build. `npm run build` will lint, test, and security check before transpiling into the lib directory.