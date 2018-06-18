/* eslint-disable */
import request from 'supertest';
import express from 'express';
import HttpError from '../models/error.http';
import {ErrorHandler, NotFoundHandler} from './error-handler';
var app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/err', (req, res, next) => {
  var err = HttpError.notAuthorizedError();
  //console.log('ready set err', err);
  next(err);
});
app.use(NotFoundHandler, ErrorHandler);

describe('GET /', () => {
  it('sends "hello world" in the response body', done => {
    request(app)
    .get('/')
    .expect(200, 'hello world', done);
  });
});
describe('GET /', () => {
  it('sends 404 not found json error in the response body', done => {
    request(app)
    .get('/errr')
    .expect(404, '{"message":"404 Not Found.","error":{"message":"404 Not Found."},"title":"error"}', done);
  });
});
describe('GET /', () => {
  it('sends 400 bad request json error in the response body', done => {
    request(app)
    .get('/err')
    .expect(401, '{"message":"Not Authorized","error":{"message":"Not Authorized"},"title":"error"}', done);
  });
});