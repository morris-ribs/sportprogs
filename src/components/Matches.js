import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
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
      disabled: false
    };
  }

  handleClick() {
    if (typeof this.nameInput.value !== "undefined" && this.nameInput.value !== "") {
      this.setState({ disabled: true });
    }
  }
  
  render() {
    const { disabled } = this.state;
    const matches = [
      {
        id: "IrSc",
        team1: {
          img: "ir.png",
          name: "Ireland" 
        },
        team2: {
          img: "sc.png",
          name: "Scotland" 
        }
      },{
        id: "NzSa",
        team1: {
          img: "nz.png",
          name: "New Zealand" 
        },
        team2: {
          img: "sa.png",
          name: "South Africa" 
        }
      },
      {
        id: "FrAr",
        team1: {
          img: "fr.png",
          name: "France" 
        },
        team2: {
          img: "ar.png",
          name: "Argentina" 
        }
      },{
        id: "AuFi",
        team1: {
          img: "au.png",
          name: "Australia" 
        },
        team2: {
          img: "fi.png",
          name: "Fiji" 
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
                <FormControl type="text" placeholder="Your Name..." disabled={disabled} inputRef={ref => { this.nameInput = ref; }} />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <Button bsStyle="primary" disabled={disabled} onClick={this.handleClick}>
                Start Bets
              </Button>
            </Col>
          </Form>
        </Row>
        {disabled ? matches.map((match, index) =>
          <Match
              key={index}
              match={match}
              playerName={this.nameInput.value}
          />
        ) : ""}
      </Grid>
    );
  }
}

export default Matches;