'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newRating;

describe('Rating API:', function () {

  describe('GET /api/ratings', function () {
    var ratings;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/ratings').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        ratings = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      ratings.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/ratings', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/ratings').send({
        name: 'New Rating',
        info: 'This is the brand new rating!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newRating = res.body;
        done();
      });
    });

    it('should respond with the newly created rating', function () {
      newRating.name.should.equal('New Rating');
      newRating.info.should.equal('This is the brand new rating!!!');
    });
  });

  describe('GET /api/ratings/:id', function () {
    var rating;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/ratings/' + newRating._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        rating = res.body;
        done();
      });
    });

    afterEach(function () {
      rating = {};
    });

    it('should respond with the requested rating', function () {
      rating.name.should.equal('New Rating');
      rating.info.should.equal('This is the brand new rating!!!');
    });
  });

  describe('PUT /api/ratings/:id', function () {
    var updatedRating;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/ratings/' + newRating._id).send({
        name: 'Updated Rating',
        info: 'This is the updated rating!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedRating = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedRating = {};
    });

    it('should respond with the updated rating', function () {
      updatedRating.name.should.equal('Updated Rating');
      updatedRating.info.should.equal('This is the updated rating!!!');
    });
  });

  describe('DELETE /api/ratings/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/ratings/' + newRating._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when rating does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/ratings/' + newRating._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=rating.integration.js.map
