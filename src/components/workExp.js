import React from 'react';
import { Card, CardContent, Typography, Chip, Button, List, ListItem, ListItemText, ListItemIcon, Grid } from '@material-ui/core';
import Img from 'react-image';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function WorkExperience(props) {

    return (
        <div>
            <Grid container direction="column" justify="flex-start" alignItems="center" spacing={7}>
                <Grid item>
                    <Card class="box" style={{
                        backgroundColor: "#222222", width: "55vw", backgroundImage: "url(https://cdn11.bigcommerce.com/s-7dfz0/images/stencil/original/products/3079/4068/alicobuilding__00610.1515777328.jpg?c=2)",
                        height: "45vh", marginLeft: "auto", marginBottom: "auto"
                    }} raised="true">
                        <CardContent>
                            <Button href="https://www.cbord.com/" target="_blank" style={{ float: "left" }}>
                                <Img src="https://cdn.newswire.com/files/x/ff/d0/0aadb9e24d5d25a1e4dbf3464bb6.png"
                                    style={{ height: "100x", width: "400px" }} />
                            </Button>

                            <List style={{ fontWeight: "bold", float: "right", position: "relative", top: "0", width: "40%" }}>
                                
                            </List>
                            <Typography variant="h2" class="text" style={{ color: "black", backgroundColor: "rgba(255, 255, 255, 0.6)", width: "375px" }} >
                                Position: Software Engineering Intern
                                <br />
                                February 2020 </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                <Card class="box" style={{
                        backgroundColor: "#222222", width: "55vw", backgroundImage: "url(https://talkbusiness.net/wp-content/uploads/2019/08/IR_JBHuntBuildingOpens_8-19-19-732x384.jpg)",
                        height: "45vh", marginLeft: "auto", marginBottom: "10%"
                    }} raised="true">
                        <CardContent>
                            <Button href="https://www.jbhunt.com/" target="_blank" style={{ float: "left" }}>
                                <Img src="https://jbhcdn001.azureedge.net/images/JBHLogo.png"
                                    style={{ height: "100x", width: "400px" }} />
                            </Button>
                            <List style={{ fontWeight: "bold", float: "right", position: "relative", top: "0", width: "40%", backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Experience in an agile environment working on internal application development." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Interfacing with internal microservices querying with jpa." />
                                </ListItem>
                            </List>
                            <Typography variant="h2" class="text" style={{ color: "black", backgroundColor: "rgba(255, 255, 255, 0.6)", width: "375px" }} >
                                Position: Software Engineering Intern
                                <br />
                                Summer 2019 </Typography>

                            <Chip label="Java" style={{ backgroundColor: "#4aff83", fontWeight: "bold", margin: "5px" }} />
                            <Chip label="Angular 6" style={{ backgroundColor: "#ff594a", fontWeight: "bold", margin: "5px" }} />
                            <Chip label="Restful API" style={{ backgroundColor: "#684aff", fontWeight: "bold", margin: "5px" }} />

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


        </div>
    )

}