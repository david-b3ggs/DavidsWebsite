import React, { Component } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div style={{marginTop: "5%"}}>
        <Grid container direction="column" justify="center" alignItems="center" spacing="9">

          <Grid item>
          <Typography variant="h3">
            David Beggs
          </Typography>
          </Grid>
          <Grid container item direction="row" justify="center" alignItems="center" spacing="7">
              <Grid item>
                <Button>
                  --About
                </Button>
              </Grid>

              <Grid item>
                <Button>
                  Course Work
                </Button>
              </Grid>

              <Grid item>
                <Button>
                  Experience
                </Button>
              </Grid>

              <Grid item>
                <Button>
                  Skills
                </Button>
              </Grid>

              <Grid item>
                <Button>
                  Projects--
                </Button>
              </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
