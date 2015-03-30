var React       = require('react');
var jQuery      = require('jquery');
var StoriesList = require('./stories/stories_list.jsx')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      stories: []
    }
  },

  componentDidMount: function() {
    jQuery.get(this.props.source, function(stories) {
      if (this.isMounted()) {
        this.setState({
          stories: stories
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <section>
        <h1>Stories list</h1>
        <StoriesList stories={this.state.stories} />
      </section>
    );
  }
});
