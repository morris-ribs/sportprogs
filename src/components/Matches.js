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
      disabled: false, loading: false,
      matches: [
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
      ],
      playerName: ""
    };
  }

  handleClick() {
    if (typeof this.nameInput.value !== "undefined" && this.nameInput.value !== "") {
      this.setState({ isLoading: true, disabled: true, playerName: this.nameInput.value });
    }

    const { matches } = this.state;
    const matchesUpdated = matches.map(match => {
     this.sendBetToBlockchain(match, this.nameInput.value);
      delete(match.teamOneScore);      
      delete(match.teamTwoScore);
      window.$("#formInline" + match.id + "1").val("");
      window.$("#formInline" + match.id + "2").val("");
      return match;
    });

    this.setState({ isLoading: false, disabled: false, playerName: "", matches: matchesUpdated, forceValues: true });
    alert("Bets sent!");
  }

  handleScoreChange(value, teamToScore) {
    if (teamToScore === "1") {
      this.match.teamOneScore = value;
    } else {
      this.match.teamTwoScore = value;
    }
  }

  
  sendBetToBlockchain(match, playerName) {
    const urlToCall = "http://localhost:9000/bet/broadcast";
    const dataToSend = { playername: playerName, matchid: match.id, teamonescore: match.teamOneScore, teamtwoscore: match.teamTwoScore };

     // POST the bet to the blockchain
    window.$.ajax({
      url: urlToCall, 
      data: JSON.stringify(dataToSend), 
      type: "POST",
      crossDomain: true,
      success: function() {
        // Completed of async action, set loading state back
        console.log("finished");
      },
      error: function(err) {
        console.log(err);
      }
    });
  } 
  
  render() {
    const { playerName, matches, disabled, loading } = this.state;
    
    console.log(matches);
    return (
      <Grid>
        <Form inline>
          <Row className="show-grid space-top matches">
            <Col>
              <FormGroup controlId="formPlayerName">
                <ControlLabel>Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="Your Name..." 
                  inputRef={ref => { this.nameInput = ref; }} value={playerName} 
                  onChange={() => this.setState({playerName: this.nameInput.value})}/>
              </FormGroup>
            </Col>
          </Row>   
          <Row className="show-grid space-top">
            {matches.map((match, index) =>
              <Match
                key={index}
                match={match}
                playerName={playerName}
                handleScoreChange={this.handleScoreChange}
              />
            )} 
          </Row>        
          <Row className="show-grid space-top-100 matches">
            <Col>
              <Button bsStyle="primary" onClick={this.handleClick} disabled={disabled}>
                {loading ? "Sending" : "Send Bets"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Grid>
    );
  }
}

export default Matches;