import React from 'react'
import { Card, CardActionArea, CardActions, Button, CardContent, Typography, CardMedia } from "@material-ui/core"
import { useStyles } from "./styles";

function DashboardItem({path, title, desc, onPreview, onLaunch, id}) {
    const classes = useStyles();
    return (title ? 
        <Card data-testid="dashboard-item">
            <CardActionArea>
                <CardMedia
                    image={path}
                    title={title}
                    className={classes.cardImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{desc}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button title="preview" onClick={()=>onPreview({id})}>
                    Preview
                </Button>
                <Button title="launch" onClick={()=>{onLaunch({id})}}>
                    Launch
                </Button>
            </CardActions>
        </Card> : "");
}

export default DashboardItem
