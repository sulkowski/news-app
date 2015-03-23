var React       = require('react');
var StoriesList = require('./stories/stories_list.js')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      stories: [
        {
          id: 1,
          title: 'You’re Missing the Point of Server-Side Rendered JavaScript Apps',
          url: 'http://tomdale.net/2015/02/youre-missing-the-point-of-server-side-rendered-javascript-apps/',
          score: -1,
          created_at: '2015-02-20T10:12:13.000Z',
          updated_at: '2015-02-21T00:40:49.339Z'
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
});
