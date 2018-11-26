import React, { Component } from 'react';
import Comparsion from './components/Comparsion/Comparsion'
import NavBar from './components/NavBar/NavBar'
import Panel from './components/Panel/Panel'




class App extends Component {
  
  state = {
    intakeItems: [
      {name: 'breakfast',
      calories: 400,
      description: '200g classic breakfast'
      },
      {name: 'lunch',
      calories: 500,
      description: '300g classic lunch'
      },
      {name: 'coffee',
      calories: 200,
      description: '250ml coffee with milk & sugar'
      }],
    burnItems: [
      {name: 'work',
      calories: 400,
      description: '8h office job'
      },
      {name: 'biking',
      calories: 200,
      description: '1h riding bike'
      },
      {name: 'jogging',
      calories: 200,
      description: '1h jogging'
      }],
      intakeItemsToShow: [],
      burnItemsToShow:[],
  }

// gets data from clicked element
  clickIntakeItemHandler = (name, calories) => {
    // console.log(name, calories)
    this.addIntakeItemsToShow(name)
  }
  
  addIntakeItemsToShow = (name) => {
    const ItemsToAdd = this.state.intakeItems.filter((singleItem) => {
      return singleItem.name == name;
    })
    this.setState(prevState => ({
      intakeItemsToShow: [...prevState.intakeItemsToShow, ItemsToAdd[0]]
    }))
  }


  render() {
    
    return (
      <div>
        <NavBar/>
        <Comparsion
          intakeItemsToShow={this.state.intakeItemsToShow}
          burnItemsToShow={this.state.burnItemsToShow}
          />
        <Panel
          intakeItems={this.state.intakeItems}
          clickIntakeItem={this.clickIntakeItemHandler}
          burnItems={this.state.burnItems}
          />
      </div>
    );
  }
}

export default App;
