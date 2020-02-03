import React from 'react';
import { AppBar, Grid, Button, Typography, Fade, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import logo from '../assets/BU.png';
import pdf from '../Doc/DavidBeggs_Resume.pdf';

export default function MainAppBar(props) {

    return (
        <div>
            <AppBar position="fixed" style={{ backgroundColor: "rgba(21,71,52, 0)", boxShadow: "none" }}>
                <Grid container item direction="row" justify="flex-start" alignItems="center">
                    <Grid item style={{ marginLeft: "7%" }}>
                        <Button href="/#home" class="text">
                            <Typography variant="h1" class="text" style={{
                                color: "white",
                                textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000"
                            }}>
                                David Beggs</Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <IconButton style={{ color: "#0077b5" }} href="https://www.linkedin.com/in/david-beggs-v-337004180/" target="_blank">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton style={{ color: "black" }} href="https://github.com/david-b3ggs" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <img src={logo} alt="BU"
                            style={{ height: "50px", width: "50px", position: "fixed", margin: "0 0", top: "2%", left: "2%" }} />
                    </Grid>

                    <Grid item style={{ float: "right", margin: "0 auto", position: "absolute", right: "7%" }}>
                        <Button variant="contained" href={pdf} target="_blank">
                            Resume
                                <DescriptionIcon />
                        </Button>
                    </Grid>

                    <Fade in={props.fade}>
                        <Typography variant="h1" style={{ position: "fixed", margin: "0 0", top: "3%", left: "45%" }} class="text"> Welcome! </Typography>
                    </Fade>
                </Grid>

            </AppBar>
        </div>
    );
}