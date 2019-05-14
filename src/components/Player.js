import React, { Component } from 'react';
import axios from 'axios';

import Grid from 'react-bootstrap/lib/Grid';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import '../App.css';

import ch from './assets/images/ch.png';
import en from './assets/images/en.png';
import nl from './assets/images/nl.png';
import pt from './assets/images/pt.png';
import Match from './Match';

class Player extends Component {  
  constructor(props, context) {
    super(props, context);
  
    this.state = {
      disabled: false, loading: false,
      matches: [],
      playerName: this.props.match.params.playername
    };
  }
  componentDidMount() {
    const { playerName } = this.state;
    const urlToCall = "http://localhost:9000/player/" + playerName;

    axios.get(urlToCall).then(resp => {
      const matchesToUpdate = resp.data.map(bet => {
          const matchId = bet["match_id"];
          const teamOne = (matchId === "PtCh") ? 
            { img: pt, name: "Portugal" } : { img: nl, name: "Netherlands" };
          const teamTwo = (matchId === "PtCh") ? 
            { img: ch, name: "Switzerland" } : { img: en, name: "England" };
          return { 
            id: matchId,
            team1: teamOne,
            team2: teamTwo,
            teamOneScore: bet["teamonescore"],
            teamTwoScore: bet["teamtwoscore"]
          }         
        });
        
        this.setState({ matches: matchesToUpdate });
      }
    );
  }

  render() {
    const { playerName, matches } = this.state;
    
    return (
      <Grid>
      <Form inline>
          <Row className="show-grid space-top matches">
            <Col>
              <h1>
                Bets of player {playerName}
              </h1>
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
        </Form>
      </Grid>
    );
  }
}

export default Player;