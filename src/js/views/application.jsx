var React = require('react');

var NodesList = require('./nodeslist.jsx');

var Application = React.createClass({
  render: function() {
    return (
      <NodesList />
    );
  }
});

module.exports = Application;