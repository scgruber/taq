var _ = require('lodash');
var React = require('react');

var NodeStore = require('../stores/node_store.jsx');

var NodesList = require('../components/nodes_list.jsx');

var Overview = React.createClass({

  render: function() {
    return (
      <NodesList nodes = { NodeStore.getAsArray(5) } />
    );
  }
});

module.exports = Overview;