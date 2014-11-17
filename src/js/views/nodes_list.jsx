var _ = require('lodash');
var React = require('react');

var Node = require('../components/node.jsx');
var NodeStore = require('../stores/node_store.jsx');

var NodesList = React.createClass({
  getInitialState: function() {
    return {
      nodes: NodeStore.getAll()
    }
  },

  render: function() {
    return (
      <div>
        { _.pairs(this.state.nodes).map(function(node) {
          var [id, data] = node;
          return (
            <Node key     = { id }
                  title   = { data.title } 
                  author  = { data.author }
                  content = { data.content } />
          );
        }) }
      </div>
    );
  }
});

module.exports = NodesList;