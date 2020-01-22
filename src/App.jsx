import React from 'react'; 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SchoolIcon from '@material-ui/icons/School';
import GitHubIcon from '@material-ui/icons/GitHub';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import CallIcon from '@material-ui/icons/Call';
import {Typography, Grid, Button, AppBar, Paper, IconButton, Tooltip, Fade} from '@material-ui/core';
import Img from 'react-image';
import logo from './BU.png';
import face from './Face.jpg';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import VizSensor from 'react-visibility-sensor';
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

  constructor(){
    super();
    this.state = {
      imgViz: true,
      showSmall: false,
      open: false,
    };
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  switcher = (isVisible) => {
    this.setState({imgViz: isVisible, showSmall: !isVisible});
    console.log("Setting visible to: ", this.state.imgViz);
    this.state.showSmall = !this.state.imgViz;
    console.log("Small is now: ", this.state.showSmall);
  }

  render() {
    const { active } = this.state;
    return (
      <div style={{fontFamily: "Josefin"}} id="home">
        <Grid container direction="column" justify="center" alignItems="center">

        <AppBar position="fixed" style={{backgroundColor: "#154734", boxShadow: "none"}}>
        <Grid container item direction="row" justify="flex-start" alignItems="center">
          <Grid item style={{marginLeft: "7%"}}>
          <Button href="/#home" class="text">
          <Typography variant="h1" class="text" style={{color: "white"}}>
            David Beggs
          </Typography>
          </Button>
          </Grid>
          <Grid item>
            <IconButton style={{color: "#0077b5"}} href="https://www.linkedin.com/in/david-beggs-v-337004180/" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton style={{color: "black"}} href="https://github.com/david-b3ggs" target="_blank">
              <GitHubIcon />
            </IconButton>
          </Grid>

          <Grid item>
          <img src={logo}
          style={{height: "50px", width: "50px", position: "fixed", margin: "0 0", top: "2%", left: "2%"}}/>
          
          </Grid>

          <Grid item style={{ float: "right", margin: "0 auto", position: "absolute", right: "7%"}}>
            <Button variant="contained">
            Resume
            <DescriptionIcon />
            </Button>
          </Grid>

          <Fade in={this.state.imgViz}>
              <Typography variant="h1" style={{ position: "fixed", margin: "0 0", top: "3%", left: "45%"}} class="text"> Welcome! </Typography>
            </Fade>
          <Fade in={this.state.showSmall}>
          <IconButton size="medium" href="/#first" style={{margin: "0 0"}}>
            <PersonIcon style={{color: "white", height: "50px", width: "50px"}}/>
          </IconButton>
          </Fade>
          <Fade in={this.state.showSmall}>
          <IconButton size="medium" href="/#first" style={{ margin: "0 0"}}>
            <WorkIcon style={{color: "white", height: "50px", width: "50px"}}/>
          </IconButton>
          </Fade>
          <Fade in={this.state.showSmall}>
          <IconButton size="medium" href="/#first" style={{margin: "0 0"}}>
            <SchoolIcon style={{color: "white", height: "50px", width: "50px"}}/>
          </IconButton>
          </Fade>
          <Fade in={this.state.showSmall}>
          <IconButton size="medium" href="/#first" style={{ margin: "0 0"}}>
            <BuildIcon style={{color: "white", height: "50px", width: "50px"}}/>
          </IconButton>
          </Fade>
          <Fade in={this.state.showSmall}>
          <IconButton size="medium" href="/#first" style={{margin: "0 0"}}>
            <CallIcon style={{color: "white", height: "50px", width: "50px"}}/>
          </IconButton>
          </Fade>

        </Grid>

        </AppBar>

        <Grid item style={{marginTop: "12%"}}>

        <VizSensor onChange={this.switcher}>
        <HtmlTooltip title={
          <React.Fragment>
            <Typography class="text" color="inherit" variant="h2">About</Typography>
          </React.Fragment>
        } placement="top">
          <IconButton style={{margin: "auto", marginTop: "10%"}} href="/#first">
            <PersonIcon style={{ height: "220px", width: "220px", color: "white"}}/>
          </IconButton>
          </HtmlTooltip>
          </VizSensor>
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
            <CallIcon style={{height: "221px", width: "220px", color: "white"}}/>
          </IconButton>
          </HtmlTooltip>
          

        </Grid>
      </Grid>

      <Paper style={{marginTop: "25%", marginLeft: "7%", width: "85%", height: "75vh"}} id="first">
        <Grid container direction="row" justify="flex-start" alignItems="flex-start"> 
        <Grid item> 
        <Img style={{height: "38vh", width: "20vw", marginLeft: "10%", marginTop: "7%"}}
           alt="David Beggs" src={face} />
        </Grid>
        <Grid item>
          <Typography class="text" style={{fontSize: "25px", marginTop: "5%", marginLeft: "10%", width: "55vw", height: "30vh"}}>
             My name is David Beggs and I am an aspiring software engineer and innovator from Waco, Texas. I am 
             currently working toward a BSCS at Baylor University in Computer Science. Outside of the acedemic year I can 
             be found reading, gaming, running, or taking on projects way over my head. 
              <br />
              <br />
             My professional interests include: machine learning and analysis, quantum algorithm development, 
              API development, and algorithm optimization.
          </Typography>
          </Grid>

          <Grid>
            <Typography class="text" style={{fontSize: "25px", marginLeft: "6%", width: "80vw", height: "30vh"}}>
              Here is a few of my favorite books for those curious: 
            </Typography>
            
          </Grid>
        </Grid>
      </Paper>

      
      
      </div>
    );
  }
}

export default App;