import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Match from './Match';

class Matches extends Component {
  render() {
    const matches = [
      {
        team1: {
          img: "ir.png",
          name: "Ireland" 
        },
        team2: {
          img: "sc.png",
          name: "Scotland" 
        }
      },{
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
        team1: {
          img: "fr.png",
          name: "France" 
        },
        team2: {
          img: "ar.png",
          name: "Argentina" 
        }
      },{
        team1: {
          img: "au.png",
          name: "Austrialia" 
        },
        team2: {
          img: "fi.png",
          name: "Fiji" 
        }
      }
    ];
    return (
      <Grid>
        {matches.map((match, index) =>
          <Match
              key={index}
              match={match}
          />
        )}
      </Grid>
    );
  }
}

export default Matches;