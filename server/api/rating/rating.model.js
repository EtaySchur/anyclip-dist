'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RatingSchema = new _mongoose2.default.Schema({
  videoId: { type: String, required: true, unique: false },
  rate: { type: Number, required: true, unique: false },
  createdAt: { type: Date, default: Date.now }
});

exports.default = _mongoose2.default.model('Rating', RatingSchema);
//# sourceMappingURL=rating.model.js.map
