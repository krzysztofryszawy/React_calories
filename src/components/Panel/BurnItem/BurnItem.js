import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        maxWidth: 245,
        margin: '1em'
    },
    media: {
        height: 150,
    },
    };


const burnItem = (props) => {
    
 
    return (
        <div>
            <Card className={props.classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={props.classes.media}
                    image={require(`../../../assets/images/${props.img.toLowerCase()}.jpg`)}
                    title="item to burn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography component="p">
                            {props.description}
                        </Typography>
                        <Typography component="p">
                            {props.calories}kcal
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={ () => props.click(props.name, props.calories, props.uniqueName)} size="small" color="primary" variant="contained">
                        ADD
                    </Button>
                </CardActions>
            </Card>        
        </div>
    )
}

export default withStyles(styles)(burnItem)