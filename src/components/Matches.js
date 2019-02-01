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
        <Row className="show-grid space-top matches">
          <Form inline>
            <Col sm={9}>
              <FormGroup controlId="formPlayerName">
                <ControlLabel>Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="Your Name..." disabled={disabled} 
                  inputRef={ref => { this.nameInput = ref; }} />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <Button bsStyle="primary" disabled={disabled} onClick={this.handleClick}>
                Start Bets
              </Button>
            </Col>
          </Form>
        </Row>
        {matches.map((match, index) =>
          <Match
              key={index}
              match={match}
              playerName={playerName}
          />
        )}
      </Grid>
    );
  }
}

export default Matches;