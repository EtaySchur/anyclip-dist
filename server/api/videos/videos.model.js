'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideosSchema = new _mongoose2.default.Schema({
    title: { type: String, required: true, unique: false },
    type: { type: String, required: true, unique: false },
    description: { type: String, required: true, unique: false },
    videoLink: { type: String, required: true, unique: false },
    thumbnailUrl: { type: String, required: true, unique: false },
    createdAt: Date
});

exports.default = _mongoose2.default.model('Videos', VideosSchema);
//# sourceMappingURL=videos.model.js.map
