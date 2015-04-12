var React   = require('react');
var Stories = require('./list');

module.exports = React.createClass({
  render: function() {
    return (
      <Stories storiesPath={'/stories'} />
    );
  }
});
