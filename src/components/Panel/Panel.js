import React from 'react'
// import Grid from '@material-ui/core/Grid';
// import styles from './Panel.module.css'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import IntakeItem from './IntakeItem/IntakeItem'
import BurnItem from './BurnItem/BurnItem'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * .5,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: theme.spacing.unit,
    },
    panel: {
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
    }
  });

const panel = (props) => {
    
    
    const intakeItemsContent = props.intakeItems.map((singleIntakeItem, mapIndex) => 
            <IntakeItem
                key={singleIntakeItem.name+mapIndex}
                name={singleIntakeItem.name}
                calories={singleIntakeItem.calories}
                description={singleIntakeItem.description}
                icon={singleIntakeItem.icon}
                img={singleIntakeItem.img}
                click={(name, calories, uniqueName) => props.clickIntakeItem(name, calories, uniqueName)}
                />
    )
    const burnItemsContent = props.burnItems.map((singleBurnItem, mapIndex) => 
            <BurnItem
                key={singleBurnItem.name+mapIndex}
                name={singleBurnItem.name}
                calories={singleBurnItem.calories}
                description={singleBurnItem.description}
                icon={singleBurnItem.icon}
                uniqueName={singleBurnItem.name+Date.now()}
                img={singleBurnItem.img}
                click={(name, calories, uniqueName) => props.clickBurnItem(name, calories, uniqueName)}
                />
    )
    return (
        
        <div className={props.classes.panel}>
            <Paper className={props.classes.paper}>
                <Typography variant="h5" >
                    TOTAL FOOD: {props.caloriesIntakeSum} kcal
                </Typography>                
                <div style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>{intakeItemsContent}</div>
            </Paper>
            <Paper className={props.classes.paper}>
                <Typography variant="h5" >
                    TOTAL ACTIVITY: {props.caloriesBurnSum} kcal
                </Typography>
                <div style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>{burnItemsContent}</div>
            </Paper>
        </div >
    
        
    )
}

export default withStyles(styles)(panel)