import React from 'react';
import { Card, CardContent, Typography, Chip, Button, List, ListItem, ListItemText } from '@material-ui/core';
import Img from 'react-image';

export default function WorkExperience(props) {

    return (
        <div>
            <Card class="box" style={{
                backgroundColor: "#222222", width: "55vw", backgroundImage: "url(https://talkbusiness.net/wp-content/uploads/2019/08/IR_JBHuntBuildingOpens_8-19-19-732x384.jpg)",
                height: "45vh", marginLeft: "auto", marginBottom: "auto"
            }} raised="true">
                <CardContent>
                    <Button href="https://www.jbhunt.com/" target="_blank">
                        <Img src="https://jbhcdn001.azureedge.net/images/JBHLogo.png"
                            style={{ height: "100x", width: "400px" }} />
                    </Button>
                    <Typography variant="h2" class="text" style={{ color: "black", backgroundColor: "rgba(255, 255, 255, 0.6)", width: "375px" }} >
                        Position: Software Engineering Intern
                        <br />
                        Summer 2019
                    </Typography>

                    <Chip label="Java" style={{ backgroundColor: "#4aff83", fontWeight: "bold" }} />
                    <Chip label="Angular 6" style={{ backgroundColor: "#ff594a", fontWeight: "bold" }} />
                    <Chip label="Restful API" style={{ backgroundColor: "#684aff", fontWeight: "bold" }} />

                    <List>
                        <ListItem>
                            <ListItemText primary="Creating " />
                        </ListItem>
                    </List>

                </CardContent>
            </Card>
        </div>
    )

}