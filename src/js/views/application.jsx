var React = require('react');

var NodesList = require('./nodes_list.jsx');

var Application = React.createClass({
  render: function() {
    return (
      <NodesList />
    );
  }
});

module.exports = Application;