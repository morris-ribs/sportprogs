import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';

import ch from './assets/images/ch.png';
import en from './assets/images/en.png';
import nl from './assets/images/nl.png';
import pt from './assets/images/pt.png';
import Match from './Match';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class Matches extends Component {
  constructor(props, context) {
    super(props, context);
  
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      match: Object.assign({}, this.props.match),
      disabled: false,
      playerName: ""
    };
  }

  handleClick() {
    if (typeof this.nameInput.value !== "undefined" && this.nameInput.value !== "") {
      this.setState({ disabled: true, playerName: this.nameInput.value });
    }
  }

  /*
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
        this.setState({ isLoading: false, disabled: false });
      }.bind(this),
        error: function(err) {
        console.log(err);
      }
    });
  } */
  
  render() {
    const { disabled, playerName } = this.state;
    const matches = [
      {
        id: "PtCh",
        team1: {
          img: pt,
          name: "Portugal" 
        },
        team2: {
          img: ch,
          name: "Switzerland" 
        }
      },{
        id: "NlEn",
        team1: {
          img: nl,
          name: "Netherlands" 
        },
        team2: {
          img: en,
          name: "England" 
        }
      }
    ];
    return (
      <Grid>
          <Form inline>
            <Row className="show-grid space-top matches">
                <Col>
                  <FormGroup controlId="formPlayerName">
                    <ControlLabel>Name</ControlLabel>{' '}
                    <FormControl type="text" placeholder="Your Name..." disabled={disabled} 
                      inputRef={ref => { this.nameInput = ref; }} />
                  </FormGroup>
                </Col>
            </Row>   
            <Row className="show-grid space-top">
              {matches.map((match, index) =>
                  <Match
                      key={index}
                      match={match}
                      playerName={playerName}
                  />
              )} 
            </Row>        
            <Row className="show-grid space-top matches">
                <Col>
                  <Button bsStyle="primary" disabled={disabled} onClick={this.handleClick}>
                    Send Bets
                  </Button>
                </Col>
            </Row>
          </Form>
      </Grid>
    );
  }
}

export default Matches;