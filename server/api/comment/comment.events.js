/**
 * Comment model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _comment = require('./comment.model');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
CommentEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _comment2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    CommentEvents.emit(event + ':' + doc._id, doc);
    CommentEvents.emit(event, doc);
  };
}

exports.default = CommentEvents;
//# sourceMappingURL=comment.events.js.map
