var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
      stories: [
        {
          id: 1,
          title: "You’re Missing the Point of Server-Side Rendered JavaScript Apps",
          url: "http://tomdale.net/2015/02/youre-missing-the-point-of-server-side-rendered-javascript-apps/",
          score: -1,
          created_at: "2015-02-20T10:12:13.000Z",
          updated_at: "2015-02-21T00:40:49.339Z"
        }
      ]
    }
  },

  render: function() {
    return (
      <section>
        <h1>Stories list</h1>
        <StoriesList stories={this.state.stories}/>
      </section>
    );
  }
})

var StoriesList = React.createClass({
  render: function() {
    var stories = this.props.stories;

    return (
      <ul>
        {stories.map(function(story) {
          return(
            <StoryItem key={story.id} story={story}/>
          );
        })}
      </ul>
    );
  }
});

var StoryItem = React.createClass({
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

React.render(<App />, document.body);
