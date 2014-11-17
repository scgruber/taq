var React = require('react');

var Node = require('../components/node.jsx');

var NodesList = React.createClass({
  propTypes: {
    nodes: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired
    }))
  },

  render: function() {
    return (
      <div>
        { this.props.nodes.map(function(node) {
          return (
            <Node key  = { node.id }
                  node = { node } />
          );
        }) }
      </div>
    );
  }
});

module.exports = NodesList;