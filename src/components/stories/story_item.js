var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <li>
        <a href={this.props.story.url}>
          <span>({this.props.story.score})</span> | {this.props.story.title}
        </a>
      </li>
    );
  }
});
