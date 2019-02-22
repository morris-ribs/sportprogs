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

  renderInput(teamScore, teamToScore) {
    if (teamScore === "") {
      if (teamToScore === "1")
        return <FormControl type="text" placeholder="0" inputRef={ref => { this.teamInput1 = ref; }} 
          onChange={() => this.props.handleScoreChange(this.teamInput1.value, teamToScore)} />;
      
      return <FormControl type="text" placeholder="0" inputRef={ref => { this.teamInput2 = ref; }} 
        onChange={() => this.props.handleScoreChange(this.teamInput2.value, teamToScore)} />;
    }
    return <FormControl type="text" placeholder="0" disabled={true} value={teamScore} />;
  }

  render() {
    const { match } = this.props;
    const teamone = typeof match.teamOneScore === "undefined" ? "" : match.teamOneScore;
    const teamtwo = typeof match.teamTwoScore === "undefined" ? "" : match.teamTwoScore;
    
    return (
      <Col sm={6}>
        <FormGroup controlId={"formInline" + match.id + "1"}>
          <img src={match.team1.img} alt={match.team1.name} />
          <ControlLabel>{match.team1.name}</ControlLabel>{' '}
          {this.renderInput(teamone, "1")}
        </FormGroup>{' '}          
        <FormGroup controlId={"formInline" + match.id + "2"}>
          {this.renderInput(teamtwo, "2")}
          {' '}<ControlLabel>{match.team2.name}</ControlLabel>              
          <img src={match.team2.img} alt={match.team2.name} />
        </FormGroup><br />
      </Col>
    );
  }
}

Match.propTypes = {
  match: PropTypes.object.isRequired,
  playerName: PropTypes.string.isRequired,
  handleScoreChange: PropTypes.func
};
export default Match;