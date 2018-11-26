import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

import InfoBox from './components/InfoBox/InfoBox'
import NavBar from './components/NavBar/NavBar'
import Album from './components/Album/Album'

const styles = {
  container: {
    flexGrow: 1,
    padding: 24
  }
}


class App extends Component {
  


  render() {
    return (
      <div>
        <NavBar/>
        <Album/>
        <Grid className={this.props.classes.container} spacing={24} container justify='center'>
          <Grid item xs={12} md={4}>
            <InfoBox
              img={'asteroids'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoBox
              img={'candy'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoBox
              img={'bottles'}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
