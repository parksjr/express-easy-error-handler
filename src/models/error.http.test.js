/* eslint-disable */
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import HttpError from './error.http';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Constructor function: #HttpError', () => {
  it('throws error is no message parameter', () => {
    var thrown = 'HttpError constructor expects at least a message as an argument. Please refer to documentation at http://somewhere.out.there';
    expect(() => {
      var httpError = new HttpError();
    })
    .to.throw(thrown);
  });

  it('returns instanceof HttpError with "new" keyword, and proper args', () => {
    var httpError = new HttpError('There has been an error');
    expect(httpError).to.be.a.instanceof(HttpError);
  });
});

describe('Static methods: #HttpError', () => {
  it('returns instanceof HttpError with static method `notFoundError`', () => {
    expect(HttpError.notFoundError()).to.be.a.instanceof(HttpError);
  });
  it('returns instanceof HttpError with static method `notAuthorizedError`', () => {
    expect(HttpError.notAuthorizedError()).to.be.a.instanceof(HttpError);
  });
  it('returns instanceof HttpError with static method `invalidRequestError`', () => {
    expect(HttpError.invalidRequestError()).to.be.a.instanceof(HttpError);
  });
  it('returns instanceof HttpError with static method `forbiddenError`', () => {
    expect(HttpError.forbiddenError()).to.be.a.instanceof(HttpError);
  });
});