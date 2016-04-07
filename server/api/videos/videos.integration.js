'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newVideos;

describe('Videos API:', function () {

  describe('GET /api/videoss', function () {
    var videoss;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/videoss').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        videoss = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      videoss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/videoss', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/videoss').send({
        name: 'New Videos',
        info: 'This is the brand new videos!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newVideos = res.body;
        done();
      });
    });

    it('should respond with the newly created videos', function () {
      newVideos.name.should.equal('New Videos');
      newVideos.info.should.equal('This is the brand new videos!!!');
    });
  });

  describe('GET /api/videoss/:id', function () {
    var videos;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/videoss/' + newVideos._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        videos = res.body;
        done();
      });
    });

    afterEach(function () {
      videos = {};
    });

    it('should respond with the requested videos', function () {
      videos.name.should.equal('New Videos');
      videos.info.should.equal('This is the brand new videos!!!');
    });
  });

  describe('PUT /api/videoss/:id', function () {
    var updatedVideos;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/videoss/' + newVideos._id).send({
        name: 'Updated Videos',
        info: 'This is the updated videos!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedVideos = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedVideos = {};
    });

    it('should respond with the updated videos', function () {
      updatedVideos.name.should.equal('Updated Videos');
      updatedVideos.info.should.equal('This is the updated videos!!!');
    });
  });

  describe('DELETE /api/videoss/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/videoss/' + newVideos._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when videos does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/videoss/' + newVideos._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=videos.integration.js.map
