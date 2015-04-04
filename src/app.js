var React = require('react');
var App   = require('./components/app')

React.render(<App backend_host={process.env.BACKEND_HOST} />, document.body);
