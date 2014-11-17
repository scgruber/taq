var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var nodes = {
  0: { 
    title: 'Fooasdfbar',
    author: 'Barasdffoo',
    content: 'Lorem ipsum dolor sit amet.'
  },
  1: {
    title: 'FizzBuzz',
    author: 'Baz',
    content: 'Lorem ipsum dolor sit amet.'
  },
  2: {
    title: 'DoReMi',
    author: 'FaSoLaTiDo',
    content: 'Lorem ipsum dolor sit amet.'
  },
  3: {
    title: 'Alpha',
    author: 'Omega',
    content: 'Lorem ipsum dolor sit amet.'
  }
};

var NodeStore = _.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return nodes[id];
  },

  getAsObject: function() {
    return nodes;
  },

  getAsArray: function(limit) {
    nodesArray = _.pairs(nodes).map(function(kv) {
      var [id, data] = kv;
      return {
        id: parseInt(id),
        title: data.title,
        author: data.author,
        content: data.content
      }
    });

    if (limit && (limit > 0)) {
      return _.first(nodesArray, limit);
    } else {
      return nodesArray;
    }
  }
});

module.exports = NodeStore;