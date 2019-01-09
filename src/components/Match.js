import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pt from './assets/images/pt.png';

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
    const urlToCall = "http://localhost:9000/bet/broadcast";
    const dataToSend = { playername: this.props.playerName, matchid: this.props.match.id, teamonescore: 0, teamtwoscore: 0 };
    dataToSend.teamonescore = parseInt(this.teamInput1.value);
    dataToSend.teamtwoscore = parseInt(this.teamInput2.value);

     // POST the bet to the blockchain
    window.$.ajax({
      url: urlToCall, 
      data: JSON.stringify(dataToSend), 
      type: "POST",
      crossDomain: true,
      success: function() {
        // Completed of async action, set loading state back
        console.log( "finished" );
        this.setState({ isLoading: false });
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
  }

  render() {
    const matchToDisplay = this.props.match;
    const { isLoading, disabled } = this.state;
    
    return (
      <Row className="show-grid space-top">
        <Form inline>
          <Col sm={6}>
            <FormGroup controlId={"formInline" + matchToDisplay.id + "1"}>
              <img src={matchToDisplay.team1.img} alt={matchToDisplay.team1.name} />
              <ControlLabel>{matchToDisplay.team1.name}</ControlLabel>{' '}
              <FormControl type="text" placeholder="0" disabled={disabled} inputRef={ref => { this.teamInput1 = ref; }} />
            </FormGroup>{' '}
            <FormGroup controlId={"formInline" + matchToDisplay.id + "2"}>
              <FormControl type="text" placeholder="0" disabled={disabled} inputRef={ref => { this.teamInput2 = ref; }} />
              {' '}<ControlLabel>{matchToDisplay.team2.name}</ControlLabel>              
              <img src={matchToDisplay.team2.img} alt={matchToDisplay.team2.name} />
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