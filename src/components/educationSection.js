import React from 'react';
import { Card, CardContent, Typography,  Button, List, ListItem, Grid } from '@material-ui/core';
import Img from 'react-image';
export default function Education(props) {

    return (
        <div>
            <Grid container direction="column" justify="flex-start" alignItems="center" spacing={9}>
                <Grid item>
                    <Button href="https://www.ecs.baylor.edu/index.php?id=960857" target="_blank">
                        <Img src="https://www.baylor.edu/images/bu/bayloruniversity_social-media.png"
                            style={{ height: "20vh", width: "22vw", backgroundColor: "#154734", boxShadow: "10px 10px 5px grey" }} />
                    </Button>
                    <Typography class="#text" variant="h2"> Baylor Uninversity</Typography> 
                    <Typography class="#text" variant="h4" style={{ height: "20vh", width: "22vw" }}>
                        Bachelors of Computer Sceince - 2020 <br />
                        GPA: 3.0 <br/>
                        Related Coursework: 
                    <br />
                        <List disablePadding="true" dense={true}>
                            <ListItem>
                                - Algorithms
                            </ListItem>
                            <ListItem>
                                - Data Structures
                            </ListItem>
                            <ListItem>
                                - Software Engineering I & II
                            </ListItem>
                            <ListItem>
                                - Database
                            </ListItem>
                            <ListItem>
                                - Networking
                            </ListItem>
                            <ListItem>
                                - Computer Systems Programming
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>

                <Grid item>
                <Button href="http://www.mclennan.edu/" target="_blank" style={{marginTop: "5vh"}}>
                        <Img src="https://ewscripps.brightspotcdn.com/dims4/default/3094000/2147483647/strip/true/crop/1240x698+0+71/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.kxxv.com%2Fimages%2F14809725_G.jpg"
                            style={{ height: "20vh", width: "22vw", backgroundColor: "#154734", boxShadow: "10px 10px 5px grey" }} />
                    </Button>
                    <Typography class="#text" variant="h2">Mclennan Community College</Typography>
                    <Typography class="#text" variant="h4" style={{ height: "20vh", width: "22vw" }}>
                        Associates of Computer Networking - 2018 <br />
                        GPA: 3.2 
                        <br/>
                    </Typography>
                </Grid>
            </Grid>


        </div>
    )

}