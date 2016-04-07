/**
 * Videos model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _videos = require('./videos.model');

var _videos2 = _interopRequireDefault(_videos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideosEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
VideosEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _videos2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    VideosEvents.emit(event + ':' + doc._id, doc);
    VideosEvents.emit(event, doc);
  };
}

exports.default = VideosEvents;
//# sourceMappingURL=videos.events.js.map
