var React = require('react');

var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Badge         = require('react-bootstrap').Badge;

module.exports = React.createClass({
  render: function() {
    return(
      <ListGroupItem href={this.props.url}>
        {this.props.title}
        <Badge>{this.props.score}</Badge>
      </ListGroupItem>
    );
  }
});
