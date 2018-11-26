import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
    card: {
    //   maxWidth: '700px',
    },
    media: {
        height: 240,
    }
  }

const infoBox = (props) => {
    return (
        
        <Card className={props.classes.card}>
            <CardActionArea>
                <CardMedia
                    className={props.classes.media}
                    image={require(`../../assets/images/${props.img.toLowerCase()}.jpg`)}
                    title="sweet candy"
                />
                <CardContent >
                    <Typography gutterBottom variant="body1" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsam veniam cum adipisci quisquam a possimus aperiam dignissimos mollitia unde modi error officia debitis praesentium omnis perspiciatis eveniet ex quos?
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" >
                    test button
                </Button>
            </CardActions>
        </Card>

    )
}

export default withStyles(styles)(infoBox)