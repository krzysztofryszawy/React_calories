import React from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    chip: {
      margin: theme.spacing.unit,
    },
  });

const caloriesBurnAvatar = (props) => {
    return (
        <Chip
            avatar={<Avatar>{props.icon}</Avatar>}
            label={props.name}
            onDelete={() => props.click(props.uniqueName)}
            className={props.classes.chip}
            color="primary"
        />

        
    
        
    )
}

export default withStyles(styles)(caloriesBurnAvatar)
