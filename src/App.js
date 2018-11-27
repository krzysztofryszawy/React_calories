import React, { Component } from 'react';
import Comparsion from './components/Comparsion/Comparsion'
import NavBar from './components/NavBar/NavBar'
import Panel from './components/Panel/Panel'




class App extends Component {
  
  state = {
    intakeItems: [
      {name: 'breakfast',
      calories: 400,
      description: '200g classic breakfast',
      icon: '🍳'
      },
      {name: 'lunch',
      calories: 500,
      description: '300g classic lunch',
      icon: '🍲'
      },
      {name: 'coffee',
      calories: 200,
      description: '250ml coffee with milk & sugar',
      icon: '☕'
      }],
    burnItems: [
      {name: 'work',
      calories: 400,
      description: '8h office job',
      icon: '👨‍🏫'
      },
      {name: 'biking',
      calories: 200,
      description: '1h riding bike',
      icon: '🚴‍'
      },
      {name: 'jogging',
      calories: 200,
      description: '1h jogging',
      icon: '🤸‍'
      }],
      intakeItemsToShow: [],
      burnItemsToShow:[],
  }



// gets data from clicked element
  clickIntakeItemHandler = (name, calories, uniqueName) => {
    this.addIntakeItemsToShow(name)
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
    this.addBurnItemsToShow(name)
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
      };
    })
  }


  clickShowedIntakeItemHandler = (uniqueName) => {
    this.removeIntakeItemsToShow(uniqueName)
  }
  removeIntakeItemsToShow = (uniqueName) => {
    const itemsToLeave = JSON.parse(JSON.stringify(this.state.intakeItemsToShow)).filter((singleItem) => {
      return singleItem.uniqueName !== uniqueName;
    })
    this.setState({intakeItemsToShow: itemsToLeave})
  }



  clickShowedBurnItemsHandler = (uniqueName) => {
    this.removeBurnItemsToShow(uniqueName)
  }
  removeBurnItemsToShow = (uniqueName) => {
    const itemsToRemove = JSON.parse(JSON.stringify(this.state.burnItemsToShow)).filter((singleItem) => {
      return singleItem.uniqueName !== uniqueName;
    })
    this.setState({burnItemsToShow: itemsToRemove})
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
          />
        <Panel
          intakeItems={this.state.intakeItems}
          burnItems={this.state.burnItems}
          clickIntakeItem={this.clickIntakeItemHandler}
          clickBurnItem={this.clickBurnItemsHandler}
          />
      </div>
    );
  }
}

export default App;
