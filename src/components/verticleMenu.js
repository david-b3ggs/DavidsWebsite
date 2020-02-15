import React from 'react'; 
import {IconButton, Grid, Fade} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';


export default function VerticalMenu(props){

    return (
        <div style={{marginLeft: "0", marginTop: "0", position: "fixed", left: "0", top: "10vh"}}>
            <Grid container item direction="column" justify="flex-start" alignItems="flex-start">

            <Grid item>
                <Fade in={props.fade}>
                    <IconButton size="medium" href="/#first" style={{margin: "0 0"}}>
                        <PersonIcon style={{color: "white", height: "50px", width: "50px"}}/>
                    </IconButton>
                </Fade>
            </Grid>
          
          <Grid item>
            <Fade in={props.fade}>
                <IconButton size="medium" href="/#work" style={{ margin: "0 0"}}>
                    <WorkIcon style={{color: "white", height: "50px", width: "50px"}}/>
                </IconButton>
            </Fade>
          </Grid>

          <Grid item>
            <Fade in={props.fade}>
                <IconButton size="medium" href="/#education" style={{margin: "0 0"}}>
                    <SchoolIcon style={{color: "white", height: "50px", width: "50px"}}/>
                </IconButton>
            </Fade>
          </Grid>

          <Grid item>
            <Fade in={props.fade}>
                <IconButton size="medium" href="/#first" style={{ margin: "0 0"}}>
                    <BuildIcon style={{color: "white", height: "50px", width: "50px"}}/>
                </IconButton>
            </Fade>
          </Grid>

          <Grid item>
            <Fade in={props.fade}>
                <IconButton size="medium" href="/#first" style={{margin: "0 0"}}>
                    <CallIcon style={{color: "white", height: "50px", width: "50px"}}/>
                </IconButton>
            </Fade>
          </Grid>
        </Grid>
        </div>
    );
}