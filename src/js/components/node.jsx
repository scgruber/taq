var React = require('react');

var Node = React.createClass({
  propTypes: 
  {
    node: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      content: React.PropTypes.renderable.isRequired
    })
  },

  render: function() {
    return (
      <article className = "node" >
        <header>
          { this.props.node.title + ' - ' + this.props.node.author }
        </header>
        <div className="content">
          { this.props.node.content }
        </div>
      </article>
    );
  }
});

module.exports = Node;