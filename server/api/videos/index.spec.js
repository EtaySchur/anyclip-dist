'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var videosCtrlStub = {
  index: 'videosCtrl.index',
  show: 'videosCtrl.show',
  create: 'videosCtrl.create',
  update: 'videosCtrl.update',
  destroy: 'videosCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var videosIndex = proxyquire('./index.js', {
  'express': {
    Router: function Router() {
      return routerStub;
    }
  },
  './videos.controller': videosCtrlStub
});

describe('Videos API Router:', function () {

  it('should return an express router instance', function () {
    videosIndex.should.equal(routerStub);
  });

  describe('GET /api/videoss', function () {

    it('should route to videos.controller.index', function () {
      routerStub.get.withArgs('/', 'videosCtrl.index').should.have.been.calledOnce;
    });
  });

  describe('GET /api/videoss/:id', function () {

    it('should route to videos.controller.show', function () {
      routerStub.get.withArgs('/:id', 'videosCtrl.show').should.have.been.calledOnce;
    });
  });

  describe('POST /api/videoss', function () {

    it('should route to videos.controller.create', function () {
      routerStub.post.withArgs('/', 'videosCtrl.create').should.have.been.calledOnce;
    });
  });

  describe('PUT /api/videoss/:id', function () {

    it('should route to videos.controller.update', function () {
      routerStub.put.withArgs('/:id', 'videosCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/videoss/:id', function () {

    it('should route to videos.controller.update', function () {
      routerStub.patch.withArgs('/:id', 'videosCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/videoss/:id', function () {

    it('should route to videos.controller.destroy', function () {
      routerStub.delete.withArgs('/:id', 'videosCtrl.destroy').should.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map
