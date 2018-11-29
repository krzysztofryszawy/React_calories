import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const navBar = (props) => {
    return(
        <div className={props.classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={props.classes.grow} variant="h6" color="inherit" >
                        CaloriesApp (alpha)
                    </Typography>
                    <Button onClick={() => props.clickClear()} color="inherit">START AGAIN</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withStyles(styles)(navBar)