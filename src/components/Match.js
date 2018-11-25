import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class Match extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      match: Object.assign({}, this.props.match)
    };
  }

  render() {
    const matchToDisplay = this.props.match;
    return (
      <Row className="show-grid space-top">
        <Form inline>
          <Col sm={6}>
              <FormGroup controlId="formInlineName">
                <ControlLabel>{matchToDisplay.team1.name}</ControlLabel>{' '}
                <FormControl type="text" placeholder="0" />
              </FormGroup>{' '}
              <FormGroup controlId="formInlineEmail">
                <FormControl type="text" placeholder="0" />
                {' '}<ControlLabel>{matchToDisplay.team2.name}</ControlLabel>
              </FormGroup><br />
          </Col>
          <Col sm={6}>
              <Button>Send Bet</Button>
          </Col>
        </Form>
      </Row>
    );
  }
}

Match.propTypes = {
  match: PropTypes.object.isRequired
};
export default Match;