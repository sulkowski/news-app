var React = require('react');
var App   = require('./components/app.jsx')

React.render(<App source={process.env.BACKEND_HOST + '/stories'} />, document.body);
