/**
 * Rating model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _rating = require('./rating.model');

var _rating2 = _interopRequireDefault(_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RatingEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
RatingEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _rating2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    RatingEvents.emit(event + ':' + doc._id, doc);
    RatingEvents.emit(event, doc);
  };
}

exports.default = RatingEvents;
//# sourceMappingURL=rating.events.js.map
