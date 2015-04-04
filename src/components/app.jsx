var React  = require('react');

var Navbar = require('react-bootstrap').Navbar;
var Grid   = require('react-bootstrap').Grid;
var Row    = require('react-bootstrap').Row;
var Col    = require('react-bootstrap').Col;

var Navigation  = require('./navigation');
var StoriesList = require('./stories/stories_list');

module.exports = React.createClass({
  render: function() {
    return (
      <Grid style={{padding: '20px 0'}}>
        <Navbar brand='NewsApp'></Navbar>
        <Row>
          <Col md={3}>
            <Navigation></Navigation>
          </Col>
          <Col md={9}>
            <section>
              <StoriesList stories_url={this.props.backend_host + '/stories'} />
            </section>
          </Col>
        </Row>
      </Grid>
    );
  }
});
