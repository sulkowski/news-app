var React      = require('react');
var Router     = require('react-router');
var Bootstrap  = require('react-bootstrap');
var Navigation = require('./navigation');

module.exports = React.createClass({
  render: function() {
    return (
      <Bootstrap.Grid style={{padding: '20px 0'}}>
        <Bootstrap.Navbar brand='NewsApp' />
        <Bootstrap.Row>
          <Bootstrap.Col md={3}>
            <Navigation />
          </Bootstrap.Col>
          <Bootstrap.Col md={9}>
            <section>
              <Router.RouteHandler />
            </section>
          </Bootstrap.Col>
        </Bootstrap.Row>
      </Bootstrap.Grid>
    );
  }
});
