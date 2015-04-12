var React     = require('react');
var jQuery    = require('jquery');
var Bootstrap = require('react-bootstrap');
var Story     = require('./item');

module.exports = React.createClass({
  storiesUrl: function(storiesPath) {
    return process.env.BACKEND_HOST + storiesPath;
  },

  getInitialState: function() {
    return {
      stories: []
    }
  },

  componentDidMount: function() {
    jQuery.get(this.storiesUrl(this.props.storiesPath), function(stories) {
      if (this.isMounted()) {
        this.setState({stories: stories});
      }
    }.bind(this));
  },

  render: function() {
    return (
      <Bootstrap.ListGroup>
        {this.state.stories.map(function(story) {
          return(
            <Story key={story.id} {...story} />
          );
        })}
      </Bootstrap.ListGroup>
    );
  }
});
