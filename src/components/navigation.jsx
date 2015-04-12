var React                = require('react');
var Bootstrap            = require('react-bootstrap');
var ReactRouterBootstrap = require('react-router-bootstrap');

module.exports = React.createClass({
  render: function() {
    return (
      <Bootstrap.Panel>
        <Bootstrap.Nav bsStyle='pills' stacked>
          <ReactRouterBootstrap.NavItemLink to='popular'>
            Popular
          </ReactRouterBootstrap.NavItemLink>
          <ReactRouterBootstrap.NavItemLink to='recent'>
            Recent
          </ReactRouterBootstrap.NavItemLink>
        </Bootstrap.Nav>
      </Bootstrap.Panel>
    );
  }
});
