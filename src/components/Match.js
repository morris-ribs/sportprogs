import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/lib/Col';
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
          <Col sm={6}>
            <FormGroup controlId={"formInline" + matchToDisplay.id + "1"}>
              <img src={matchToDisplay.team1.img} alt={matchToDisplay.team1.name} />
              <ControlLabel>{matchToDisplay.team1.name}</ControlLabel>{' '}
              <FormControl type="text" placeholder="0" inputRef={ref => { this.teamInput1 = ref; }} />
            </FormGroup>{' '}          
            <FormGroup controlId={"formInline" + matchToDisplay.id + "2"}>
              <FormControl type="text" placeholder="0" inputRef={ref => { this.teamInput2 = ref; }} />
              {' '}<ControlLabel>{matchToDisplay.team2.name}</ControlLabel>              
              <img src={matchToDisplay.team2.img} alt={matchToDisplay.team2.name} />
            </FormGroup><br />
          </Col>
    );
  }
}

Match.propTypes = {
  match: PropTypes.object.isRequired,
  playerName: PropTypes.string.isRequired,
  teamonescore: PropTypes.number,
  teamtwoscore: PropTypes.number
};
export default Match;