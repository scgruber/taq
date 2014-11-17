var React = require('react');

var Node = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    content: React.PropTypes.renderable.isRequired
  },

  render: function() {
    return (
      <article className="node">
        <header>
          { this.props.title + ' - ' + this.props.author }
        </header>
        <div className="content">
          { this.props.content }
        </div>
      </article>
    );
  }
});

module.exports = Node;