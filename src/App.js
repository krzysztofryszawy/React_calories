import React, { Component } from 'react';
import Comparsion from './components/Comparsion/Comparsion'
import NavBar from './components/NavBar/NavBar'
import Panel from './components/Panel/Panel'




class App extends Component {
  
  componentDidUpdate(prevState) {
    // if (prevState.caloriesIntakeSum !== this.state.caloriesIntakeSum)
    //  {this.setVerdictHandler()}
  }


  state = {
    intakeItems: [
      {name: 'breakfast',calories: 750,description: '200g classic breakfast',icon: '🥐',img: 'breakfast'},
      {name: 'coffee', calories: 200,description: '250ml coffee with milk & sugar',icon: '☕',img: 'coffee'},
      {name: 'snack',calories: 100,description: '100g favorite snack',icon: '🍰',img: 'snack'},
      {name: 'apple',calories: 50,description: '1 juicy apple',icon: '🍏',img: 'apple'},
      {name: 'lunch',calories: 788,description: '300g classic lunch',icon: '🥗',img: 'lunch'},
      {name: 'banana',calories: 100,description: '1 average banana',icon: '🍌',img: 'banana'},
      {name: 'hotdog',calories: 100,description: '1 looking good hotdog',icon: '🌭',img: 'hotdog'},
      {name: 'dinner',calories: 788,description: '300g classic dinner',icon: '🍲',img: 'dinner'},],
    burnItems: [
      {name: 'work',calories: 800,description: '8h office job',icon: '👨‍🏫',img: 'work'},
      {name: 'walking',calories: 267,description: '1h walking',icon: '👟',img: 'walking'},
      {name: 'dogtrekking',calories: 267,description: '1h dogtrekking',icon: '🐩',img: 'dogtrekking'},
      {name: 'gaming',calories: 81,description: '1h playing videogame (hard-lever)',icon: '🎮',img: 'gaming'},
      {name: 'jogging',calories: 773,description: '1h jogging',icon: '🤸‍',img: 'jogging'},
      {name: 'biking',calories: 596,description: '1h riding bike',icon: '🚴‍',img: 'biking'},
      {name: 'football',calories: 494,description: '1h hard football game',icon: '⚽',img: 'football'},
      {name: 'swimming',calories: 492,description: '1h swiming game',icon: '🏊‍',img: 'swimming'}],
      intakeItemsToShow: [],
      burnItemsToShow:[],
      caloriesIntakeSum: 0,
      caloriesBurnSum: 0,
      verdict: '[*TIP] Go ahead, eat some snack 🍩 by clicking ADD below'
  }

  

// gets data from clicked element
  clickIntakeItemHandler = (name, calories, uniqueName) => {
    if (this.state.caloriesIntakeSum >= 6000) {
      return
    }
    this.addIntakeItemsToShow(name)
    this.setState(prevState => {
      return { caloriesIntakeSum: prevState.caloriesIntakeSum+calories }
    },() => this.setVerdictHandler())
    
  }
// adding data to array of items to show + uniqueNane based on current time
  addIntakeItemsToShow = (name) => {
    const itemsToAdd = JSON.parse(JSON.stringify(this.state.intakeItems)).filter((singleItem) => {
      return singleItem.name == name;
    })
    itemsToAdd[0]['uniqueName'] = Date.now()
    this.setState(prevState => {
      const intakeItemsToShow = prevState.intakeItemsToShow.concat(itemsToAdd[0]);
      return {
        intakeItemsToShow,
      };
    })
  }



  // gets data from clicked element
  clickBurnItemsHandler = (name, calories, uniqueName) => {
    if (this.state.caloriesBurnSum >= 6000) {
      console.log(this.state.caloriesBurnSum)
      return
    }
    this.addBurnItemsToShow(name)   
    this.setState(prevState => {
      return { caloriesBurnSum: prevState.caloriesBurnSum+calories }
    },() => this.setVerdictHandler())
  }
// adding data to array of items to show + uniqueNane based on current time
  addBurnItemsToShow = (name) => {
    const itemsToAdd = JSON.parse(JSON.stringify(this.state.burnItems)).filter((singleItem) => {
      return singleItem.name == name;
    })    
    itemsToAdd[0]['uniqueName'] = Date.now()
    this.setState(prevState => {
      const burnItemsToShow = prevState.burnItemsToShow.concat(itemsToAdd[0]);
      return {
        burnItemsToShow,
      }
    })
  }

// gets data from clicked element
  clickShowedIntakeItemHandler = (uniqueName, calories) => {
    this.removeIntakeItemsToShow(uniqueName)
    this.setState(prevState => {
      return { caloriesIntakeSum: prevState.caloriesIntakeSum-calories }
    },() => this.setVerdictHandler())
  }
// removing data from array of items to show
  removeIntakeItemsToShow = (uniqueName) => {
    const itemsToLeave = JSON.parse(JSON.stringify(this.state.intakeItemsToShow)).filter((singleItem) => {
      return singleItem.uniqueName !== uniqueName;
    })
    this.setState({intakeItemsToShow: itemsToLeave})
  }

// gets data from clicked element
  clickShowedBurnItemsHandler = (uniqueName, calories) => {
    this.removeBurnItemsToShow(uniqueName)
    this.setState(prevState => {
      return { caloriesBurnSum: prevState.caloriesBurnSum-calories }
    })

  }
  removeBurnItemsToShow = (uniqueName) => {
    const itemsToLeave = JSON.parse(JSON.stringify(this.state.burnItemsToShow)).filter((singleItem) => {
      return singleItem.uniqueName !== uniqueName;
    })
    this.setState({burnItemsToShow: itemsToLeave},() => this.setVerdictHandler())
  }

  setVerdictHandler = () => {

    if (this.state.caloriesIntakeSum >= 6000) {
      this.setState({verdict: 'calories intake above reasonable limits'})
      return
    }
    if (this.state.caloriesBurnSum >= 6000) {
      this.setState({verdict: 'calories burn above reasonable limits'})
      return
    }
    if (this.state.caloriesIntakeSum > this.state.caloriesBurnSum) {
      this.setState({verdict: `you ate ${this.state.caloriesIntakeSum-this.state.caloriesBurnSum}kCal too many. Consider some activity 🏸`})
      } else if (this.state.caloriesIntakeSum < this.state.caloriesBurnSum) {
        this.setState({verdict: `you ate ${this.state.caloriesBurnSum-this.state.caloriesIntakeSum}kCal too few! Refill deficit 🌭`})
        } else 
          this.setState({verdict: 'Perfect! Go ahead, eat some cookie 🍩'})
  }



  render() {
    
    return (
      <div>
        <NavBar/>
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
      </div>
    );
  }
}

export default App;