var React     = require('react');
var StoryItem = require('./story_item.jsx')

module.exports = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.stories.map(function(story) {
          return(
            <StoryItem key={story.id} story={story}/>
          );
        })}
      </ul>
    );
  }
});
