'use strict';

var express = require('express');
var controller = require('./videos.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);

module.exports = router;
//# sourceMappingURL=index.js.map
