var React  = require('react');
var jQuery = require('jquery');

var ListGroup = require('react-bootstrap').ListGroup;

var StoryItem = require('./story_item');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      stories: []
    }
  },

  componentDidMount: function() {
    jQuery.get(this.props.stories_url, function(stories) {
      if (this.isMounted()) {
        this.setState({
          stories: stories
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <ListGroup>
        {this.state.stories.map(function(story) {
          return(
            <StoryItem key={story.id} {...story} />
          );
        })}
      </ListGroup>
    );
  }
});
