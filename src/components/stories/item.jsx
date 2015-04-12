var React     = require('react');
var Bootstrap = require('react-bootstrap');

module.exports = React.createClass({
  render: function() {
    return(
      <Bootstrap.ListGroupItem href={this.props.url}>
        {this.props.title}
        <Bootstrap.Badge>{this.props.score}</Bootstrap.Badge>
      </Bootstrap.ListGroupItem>
    );
  }
});
