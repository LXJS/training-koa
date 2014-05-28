
var request = require('supertest');

var app = require('./index.js');

describe('Templating', function () {
  it('should return the template', function (done) {
    request(app.listen())
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .expect('<!DOCTYPE html>')
    .expect('<p>Hello!</p>', done)
  })
})
