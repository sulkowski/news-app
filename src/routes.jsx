var React          = require('react');
var Router         = require('react-router');
var App            = require('./components/app');
var PopularStories = require('./components/stories/popular');
var RecentStories  = require('./components/stories/recent');

module.exports = (
  <Router.Route handler={App} path='/'>
    <Router.Route name='recent' handler={RecentStories} />
    <Router.Route name='popular' handler={PopularStories} />
    <Router.Redirect from='' to='popular' />
  </Router.Route>
);
