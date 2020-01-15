import React, { Component } from 'react';
import Avatar from 'react-avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolIcon from '@material-ui/icons/School';
import GitHubIcon from '@material-ui/icons/GitHub';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import CallIcon from '@material-ui/icons/Call';
import {Typography, Grid, Button, AppBar, ToolBar, Paper, IconButton, Box, Tooltip} from '@material-ui/core';
import {BrowserRouter as Navlink} from 'react-router-dom';
import Img from 'react-image'
import PersonIcon from '@material-ui/icons/Person';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './App.css';


const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();
  return <Tooltip arrow classes={classes} {...props} />;
}

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

class App extends React.Component {

  render() {
    return (
      <div style={{fontFamily: "Josefin"}}>

        <Grid container direction="column" justify="flex-start" align-items="center">
        <AppBar position="fixed" style={{backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "none"}}>
        <Grid container item direction="row" justify="flex-start" alignItems="center">
          <Grid item style={{marginLeft: "7%"}}>
          <Typography variant="h1" class="text" style={{color: "white"}}>
            David Beggs
          </Typography>
          </Grid>
          <Grid item>
            <IconButton style={{color: "#0077b5"}}>
              <LinkedInIcon />
            </IconButton>
            <IconButton style={{color: "black"}}>
              <GitHubIcon />
            </IconButton>

          </Grid>
          <Grid item style={{ float: "right", margin: "0 auto", position: "absolute", right: "7%"}}>
            <Button variant="contained">
            Resume
            <DescriptionIcon />
            </Button>
          </Grid>
        </Grid>
        </AppBar>

        <Grid item style={{marginTop: "12%", marginLeft: "4%"}}>

        <HtmlTooltip title={
          <React.Fragment>
            <Typography class="text" color="inherit" variant="h2">About</Typography>
          </React.Fragment>
        } placement="top">
          <IconButton style={{margin: "auto", marginTop: "10%"}} href="/#first" on>
            <PersonIcon style={{ height: "220px", width: "220px", color: "white"}}/>
          </IconButton>
          </HtmlTooltip>

          <HtmlTooltip title={
            <React.Fragment>
              <Typography class="text" color="inherit" variant="h2">Work Experience</Typography>
            </React.Fragment>
          } placement="top">
          <IconButton style={{margin: "auto", marginTop: "10%"}} >
            <WorkIcon style={{height: "220px", width: "220px", color: "white"}}/>
          </IconButton>
          </HtmlTooltip>

          <HtmlTooltip title={
            <React.Fragment>
              <Typography class="text" color="inherit" variant="h2">Education</Typography>
            </React.Fragment>
          } placement="top">
          <IconButton style={{margin: "auto", marginTop: "10%"}} >
            <SchoolIcon style={{height: "220px", width: "220px", color: "white"}}/>
          </IconButton>
          </HtmlTooltip>

          <HtmlTooltip title={
            <React.Fragment>
              <Typography class="text" color="inherit" variant="h2">Projects</Typography>
            </React.Fragment>
          } placement="top">
          <IconButton style={{margin: "auto", marginTop: "10%"}} >
            <BuildIcon style={{height: "220px", width: "220px", color: "white"}}/>
          </IconButton>
          </HtmlTooltip>

          <HtmlTooltip title={
            <React.Fragment>
              <Typography class="text" color="inherit" variant="h2">Contact</Typography>
            </React.Fragment>
          } placement="top">
          <IconButton style={{margin: "auto", marginTop: "10%"}} >
            <CallIcon style={{height: "220px", width: "220px", color: "white"}}/>
          </IconButton>
          </HtmlTooltip>

        </Grid>
      </Grid>

      <Paper style={{marginTop: "25%", marginLeft: "7%", width: "85%", backgroundColor: "cream", height: "75vh"}} id="first">
          <Img src="https://media-exp2.licdn.com/dms/image/C4E03AQErniDKt2pmaw/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=QIzPmgD66NnkfWp24Zmo3hTMP0gk2qupAMFrTIRlhIM" />
      </Paper>
      </div>
    );
  }
}

export default App;
