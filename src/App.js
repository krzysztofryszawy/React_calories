import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';

import Comparsion from './components/Comparsion/Comparsion';
import Panel from './components/Panel/Panel';

import localDatabaseIntake from './assets/database/databaseIntake.json';
import localDatabaseBurn from './assets/database/databaseBurn.json';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class App extends Component {
  componentDidUpdate(prevState) {
    // if (prevState.caloriesIntakeSum !== this.state.caloriesIntakeSum)
    //  {this.setVerdictHandler()}
  }

  state = {
    intakeItems: localDatabaseIntake,
    burnItems: localDatabaseBurn,
    intakeItemsToShow: [],
    burnItemsToShow: [],
    caloriesIntakeSum: 0,
    caloriesBurnSum: 0,
    verdict: '[*TIP] Go ahead, eat some snack 🍩 by clicking ADD below'
  };

  // gets data from clicked element
  clickIntakeItemHandler = (name, calories, uniqueName) => {
    if (this.state.caloriesIntakeSum >= 6000) {
      return;
    }
    this.addIntakeItemsToShow(name);
    this.setState(
      prevState => {
        return { caloriesIntakeSum: prevState.caloriesIntakeSum + calories };
      },
      () => this.setVerdictHandler()
    );
  };
  // adding data to array of items to show + uniqueNane based on current time
  addIntakeItemsToShow = name => {
    const itemsToAdd = JSON.parse(
      JSON.stringify(this.state.intakeItems)
    ).filter(singleItem => {
      return singleItem.name === name;
    });
    itemsToAdd[0]['uniqueName'] = Date.now();
    this.setState(prevState => {
      const intakeItemsToShow = prevState.intakeItemsToShow.concat(
        itemsToAdd[0]
      );
      return {
        intakeItemsToShow
      };
    });
  };

  // gets data from clicked element
  clickBurnItemsHandler = (name, calories, uniqueName) => {
    if (this.state.caloriesBurnSum >= 6000) {
      console.log(this.state.caloriesBurnSum);
      return;
    }
    this.addBurnItemsToShow(name);
    this.setState(
      prevState => {
        return { caloriesBurnSum: prevState.caloriesBurnSum + calories };
      },
      () => this.setVerdictHandler()
    );
  };
  // adding data to array of items to show + uniqueNane based on current time
  addBurnItemsToShow = name => {
    const itemsToAdd = JSON.parse(JSON.stringify(this.state.burnItems)).filter(
      singleItem => {
        return singleItem.name === name;
      }
    );
    itemsToAdd[0]['uniqueName'] = Date.now();
    this.setState(prevState => {
      const burnItemsToShow = prevState.burnItemsToShow.concat(itemsToAdd[0]);
      return {
        burnItemsToShow
      };
    });
  };

  // gets data from clicked element
  clickShowedIntakeItemHandler = (uniqueName, calories) => {
    this.removeIntakeItemsToShow(uniqueName);
    this.setState(
      prevState => {
        return { caloriesIntakeSum: prevState.caloriesIntakeSum - calories };
      },
      () => this.setVerdictHandler()
    );
  };
  // removing data from array of items to show
  removeIntakeItemsToShow = uniqueName => {
    const itemsToLeave = JSON.parse(
      JSON.stringify(this.state.intakeItemsToShow)
    ).filter(singleItem => {
      return singleItem.uniqueName !== uniqueName;
    });
    this.setState({ intakeItemsToShow: itemsToLeave });
  };

  // gets data from clicked element
  clickShowedBurnItemsHandler = (uniqueName, calories) => {
    this.removeBurnItemsToShow(uniqueName);
    this.setState(prevState => {
      return { caloriesBurnSum: prevState.caloriesBurnSum - calories };
    });
  };
  removeBurnItemsToShow = uniqueName => {
    const itemsToLeave = JSON.parse(
      JSON.stringify(this.state.burnItemsToShow)
    ).filter(singleItem => {
      return singleItem.uniqueName !== uniqueName;
    });
    this.setState({ burnItemsToShow: itemsToLeave }, () =>
      this.setVerdictHandler()
    );
  };

  setVerdictHandler = () => {
    if (this.state.caloriesIntakeSum >= 6000) {
      this.setState({ verdict: 'calories intake above reasonable limits' });
      return;
    }
    if (this.state.caloriesBurnSum >= 6000) {
      this.setState({ verdict: 'calories burn above reasonable limits' });
      return;
    }
    if (this.state.caloriesIntakeSum > this.state.caloriesBurnSum) {
      this.setState({
        verdict: `you ate ${this.state.caloriesIntakeSum -
          this.state.caloriesBurnSum}kCal too many. Consider some activity 🏸`
      });
    } else if (this.state.caloriesIntakeSum < this.state.caloriesBurnSum) {
      this.setState({
        verdict: `you ate ${this.state.caloriesBurnSum -
          this.state.caloriesIntakeSum}kCal too few! Refill deficit 🌭`
      });
    } else this.setState({ verdict: 'Perfect! Go ahead, eat some cookie 🍩' });
  };

  clearStateHandler = () => {
    this.setState({
      intakeItemsToShow: [],
      burnItemsToShow: [],
      caloriesIntakeSum: 0,
      caloriesBurnSum: 0,
      verdict: '[*TIP] Go ahead, eat some snack 🍩 by clicking ADD below'
    });
  };

  render() {
    return (
      <div>
        <NavBar clickClear={this.clearStateHandler} />
        <Comparsion
          intakeItemsToShow={this.state.intakeItemsToShow}
          burnItemsToShow={this.state.burnItemsToShow}
          clickShowedIntakeItem={this.clickShowedIntakeItemHandler}
          clickShowedBurnItem={this.clickShowedBurnItemsHandler}
          verdict={this.state.verdict}
        />
        <Panel
          intakeItems={this.state.intakeItems}
          burnItems={this.state.burnItems}
          clickIntakeItem={this.clickIntakeItemHandler}
          clickBurnItem={this.clickBurnItemsHandler}
          caloriesIntakeSum={this.state.caloriesIntakeSum}
          caloriesBurnSum={this.state.caloriesBurnSum}
        />
        <footer className={this.props.classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            CaloriesApp (alpha)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            This Intake&Burn calories App was designed, developed and produced
            by a multicultural team of various beliefs, sexual orientations and
            gender identities.
          </Typography>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
