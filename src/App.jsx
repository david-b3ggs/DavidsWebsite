import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import CallIcon from '@material-ui/icons/Call';
import { Typography, Box, Grid, Button, Paper, IconButton, Tooltip } from '@material-ui/core';
import Img from 'react-image';
import face from './assets/Face.jpg';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import VizSensor from 'react-visibility-sensor';
import './App.css';
import VerticalMenu from './components/verticleMenu';
import WorkExperience from './components/workExp';
import MainAppBar from './components/appBar';
import Education from './components/educationSection';

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

  constructor() {
    super();
    this.state = {
      imgViz: true,
      showSmall: false,
      open: false,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  switcher = (isVisible) => {
    this.setState({ imgViz: isVisible, showSmall: !isVisible });
    console.log("Setting visible to: ", this.state.imgViz);
    this.state.showSmall = !this.state.imgViz;
    console.log("Small is now: ", this.state.showSmall);
  }

  render() {
    const { active } = this.state;
    return (
      <div style={{ fontFamily: "Josefin" }} id="home">
        <Grid container direction="column" justify="center" alignItems="center">

          <MainAppBar fade={this.state.imgViz} />
          <VerticalMenu fade={this.state.showSmall} />

          <Grid item style={{ marginTop: "12%" }}>

            <VizSensor onChange={this.switcher}>
              <HtmlTooltip title={
                <React.Fragment>
                  <Typography class="text" color="inherit" variant="h2">About</Typography>
                </React.Fragment>
              } placement="top">
                <IconButton style={{ margin: "auto", marginTop: "10%" }} href="/#first">
                  <PersonIcon style={{ height: "220px", width: "220px", color: "white" }} />
                </IconButton>
              </HtmlTooltip>
            </VizSensor>
            <HtmlTooltip title={
              <React.Fragment>
                <Typography class="text" color="inherit" variant="h2">Work Experience</Typography>
              </React.Fragment>
            } placement="top">
              <IconButton style={{ margin: "auto", marginTop: "10%" }} href="/#work">
                <WorkIcon style={{ height: "220px", width: "220px", color: "white" }} />
              </IconButton>
            </HtmlTooltip>

            <HtmlTooltip title={
              <React.Fragment>
                <Typography class="text" color="inherit" variant="h2">Education</Typography>
              </React.Fragment>
            } placement="top">
              <IconButton style={{ margin: "auto", marginTop: "10%" }} href="/#education">
                <SchoolIcon style={{ height: "220px", width: "220px", color: "white" }} />
              </IconButton>
            </HtmlTooltip>

            <HtmlTooltip title={
              <React.Fragment>
                <Typography class="text" color="inherit" variant="h2">Projects</Typography>
              </React.Fragment>
            } placement="top">
              <IconButton style={{ margin: "auto", marginTop: "10%" }} >
                <BuildIcon style={{ height: "220px", width: "220px", color: "white" }} />
              </IconButton>
            </HtmlTooltip>

            <HtmlTooltip title={
              <React.Fragment>
                <Typography class="text" color="inherit" variant="h2">Contact</Typography>
              </React.Fragment>
            } placement="top">
              <IconButton style={{ margin: "auto", marginTop: "10%" }} >
                <CallIcon style={{ height: "221px", width: "220px", color: "white" }} />
              </IconButton>
            </HtmlTooltip>
          </Grid>

          <Paper style={{ marginTop: "25%", width: "75vw", height: "75vh" }} id="first">
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
              <Grid item>
                <Img style={{ height: "38vh", width: "20vw", marginLeft: "10%", marginTop: "7%" }}
                  alt="David Beggs" src={face} />
              </Grid>
              <Grid item>
                <Typography class="text" style={{ fontSize: "25px", marginTop: "5%", marginLeft: "10%", width: "50vw", height: "30vh" }}>
                  My name is David Beggs and I am an aspiring software engineer and innovator from Waco, Texas. I am
                  currently working toward a BSCS at Baylor University in Computer Science. Outside of the acedemic year I can
                  be found reading, gaming, running, or taking on projects way over my head.
              <br />
                  <br />
                  My professional interests include: machine learning and analysis, quantum algorithm development,
                   API development, and algorithm optimization.
          </Typography>
              </Grid>

              <Grid item>
                <Typography class="text" style={{ fontSize: "25px", marginLeft: "6%", width: "80vw", height: "6vh" }}>
                  Here is a few of my favorite books for those curious:
            </Typography>
              </Grid>
            </Grid>
            <Grid style={{ top: "0" }} container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
              <Grid item style={{ top: "0" }}>
                <Box class="box" style={{ color: "#154734", backgroundImage: "url(\"https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg\")", backgroundSize: "cover" }}>
                </Box>
              </Grid>
              <Grid item>
                <Box class="box" style={{ color: "#154734", backgroundImage: "url(\"https://images-na.ssl-images-amazon.com/images/I/91EO18pneWL.jpg\")", backgroundSize: "cover" }}>
                </Box>
              </Grid>
              <Grid item>
                <Box class="box" style={{ color: "#154734", backgroundImage: "url(\"https://images-na.ssl-images-amazon.com/images/I/71KkAKYWcuL.jpg\")", backgroundSize: "cover" }}>
                </Box>
              </Grid>
              <Grid item>
                <Box class="box" style={{ color: "#154734", backgroundImage: "url(\"https://images-na.ssl-images-amazon.com/images/I/81ZNpvxzrzL.jpg\")", backgroundSize: "cover" }}>
                </Box>
              </Grid>
              <Grid item>
                <Box class="box" style={{ color: "#154734", backgroundImage: "url(\"https://static1.koorong.com/images/p/08/zdv/d/0060628391@2x.jpg\")", backgroundSize: "cover" }}>
                </Box>
              </Grid>
            </Grid>
          </Paper>

        </Grid>

        <Box display="flex">
          <Paper id="work" style={{ marginTop: "10vh", marginLeft: "12vw", width: "75vw", height: "auto", minHeight: "90vh" }}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={6}>
              <Grid item >
                <Typography variant="h1" class="text" style={{
                  fontSize: "60px", top: "0",
                  textDecorationLine: "underline"
                }} >Work Experience</Typography>
              </Grid>
              <Grid item>
                <WorkExperience />
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Box display="flex">
          <Paper id="education" style={{ marginTop: "10vh", marginLeft: "12vw", width: "75vw", height: "auto", minHeight: "90vh" }}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
              <Grid item >
                <Typography variant="h1" class="text" style={{
                  fontSize: "60px", top: "0",
                  textDecorationLine: "underline"
                }} >Education</Typography>
              </Grid>
              <Grid item>
                <Education />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>);
  }
}

export default App;
