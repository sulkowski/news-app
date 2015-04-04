var React = require('react');

var Panel   = require('react-bootstrap').Panel
var Nav     = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

module.exports = React.createClass({
  render: function() {
    return (
      <Panel>
        <Nav bsStyle='pills' stacked activeKey={1}>
          <NavItem eventKey={1} href='#'>Popular</NavItem>
          <NavItem eventKey={2} href='#'>Recent</NavItem>
        </Nav>
      </Panel>
    );
  }
});
