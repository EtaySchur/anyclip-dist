'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentSchema = new _mongoose2.default.Schema({
    text: { type: String, required: true, unique: false },
    videoId: { type: String, required: true, unique: false },
    createdAt: { type: Date, default: Date.now }
});

exports.default = _mongoose2.default.model('Comment', CommentSchema);
//# sourceMappingURL=comment.model.js.map
