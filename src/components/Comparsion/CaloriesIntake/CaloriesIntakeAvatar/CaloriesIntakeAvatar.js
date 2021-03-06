import React from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    chip: {
      margin: theme.spacing.unit,
    },
  });

const caloriesIntakeAvatar = (props) => {
    return (
        <Chip
            avatar={<Avatar>{props.icon}</Avatar>}
            label={props.name}
            onDelete={() => props.click(props.uniqueName, props.calories)}
            className={props.classes.chip}
            color="secondary"
        />
        
    )
}

export default withStyles(styles)(caloriesIntakeAvatar)