var React = require('react');

var Node = require('../components/node.jsx');

var NodesList = React.createClass({
  getInitialState: function() {
    return {
      nodes: [
        {
          id: 0,
          title: 'Fooasdfbar',
          author: 'Barasdffoo',
          content: 'Lorem ipsum dolor sit amet.'
        },
        {
          id: 1,
          title: 'FizzBuzz',
          author: 'Baz',
          content: 'Lorem ipsum dolor sit amet.'
        },
        {
          id: 2,
          title: 'DoReMi',
          author: 'FaSoLaTiDo',
          content: 'Lorem ipsum dolor sit amet.'
        },
        {
          id: 3,
          title: 'Alpha',
          author: 'Omega',
          content: 'Lorem ipsum dolor sit amet.'
        }
      ]
    }
  },

  render: function() {
    return (
      <div>
        { this.state.nodes.map(function(n) {
          return  <Node key     = { n.id }
                        title   = { n.title } 
                        author  = { n.author }
                        content = { n.content } />
        }) }
      </div>
    );
  }
});

module.exports = NodesList;