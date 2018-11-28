import React, { Component } from 'react'
// import styles from './Comparsion.module.css'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CaloriesIntake from './CaloriesIntake/CaloriesIntake'
import CaloriesBurn from './CaloriesBurn/CaloriesBurn'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: theme.spacing.unit,
    },
    panel: {
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
    },
    comparsion: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '10vh',
    }
  });

class comparsion extends Component {

    state = {
    }

    render (props) {

        return (
            <Paper className={this.props.classes.paper}>
                <div className={this.props.classes.comparsion}>                
                    <CaloriesIntake
                        intakeItemsToShow={this.props.intakeItemsToShow}
                        clickShowedIntakeItem={this.props.clickShowedIntakeItem}/>
                    <CaloriesBurn
                        burnItemsToShow={this.props.burnItemsToShow}
                        clickShowedBurnItem={this.props.clickShowedBurnItem}/>
                </div>
                <Paper className={this.props.classes.paper}>
                    <Typography gutterBottom variant="h4" component="h4">
                        {this.props.verdict}
                    </Typography>
                </Paper>
            </Paper>
        )   
    }

}

export default withStyles(styles)(comparsion)