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
    
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      match: Object.assign({}, this.props.match),
      isLoading: false,
      disabled: false
    };
  }

  handleClick() {
    this.setState({ isLoading: true, disabled: true });
    // const url = "https://localhost:3001/transaction/broadcast";
    const key1 = this.props.match.team1.name;
    const key2 = this.props.match.team2.name;
    const data = { playerName: this.props.playerName, match: {} };
    data.match["id"] = this.props.match.id;
    data.match[key1] = this.teamInput1.value;
    data.match[key2] = this.teamInput2.value;
    console.log(data);

     // POST the bet to the blockchain
   /* window.$.post(url, data, function() {
      setTimeout(() => {
        // Completed of async action, set loading state back
        this.setState({ isLoading: false });
      }, 2000);
    });*/

    // REMOVE after
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const matchToDisplay = this.props.match;
    const { isLoading, disabled } = this.state;
    return (
      <Row className="show-grid space-top">
        <Form inline>
          <Col sm={6}>
            <FormGroup controlId={"formInline" + matchToDisplay.id + "1"}>
              <ControlLabel>{matchToDisplay.team1.name}</ControlLabel>{' '}
              <FormControl type="text" placeholder="0" disabled={disabled} inputRef={ref => { this.teamInput1 = ref; }} />
            </FormGroup>{' '}
            <FormGroup controlId={"formInline" + matchToDisplay.id + "2"}>
              <FormControl type="text" placeholder="0" disabled={disabled} inputRef={ref => { this.teamInput2 = ref; }} />
              {' '}<ControlLabel>{matchToDisplay.team2.name}</ControlLabel>
            </FormGroup><br />
          </Col>
          <Col sm={6}>
            <Button bsStyle="primary" disabled={disabled} onClick={!isLoading ? this.handleClick : null}>
              {isLoading ? 'Loading...' : disabled ? 'Bet Sent!' : 'Send Bet'}
            </Button>
          </Col>
        </Form>
      </Row>
    );
  }
}

Match.propTypes = {
  match: PropTypes.object.isRequired,
  playerName: PropTypes.string.isRequired
};
export default Match;