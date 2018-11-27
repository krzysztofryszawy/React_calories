import React, { Component } from 'react'
import styles from './Comparsion.module.css'

import CaloriesIntake from './CaloriesIntake/CaloriesIntake'
import CaloriesBurn from './CaloriesBurn/CaloriesBurn'



class comparsion extends Component {

    state = {
        grow: 2,
    }




    growHandler = () => {
        this.setState({grow:1})
    }




    render (props) {


        return (
            <React.Fragment>
                <button onClick={this.growHandler}>GROW</button>
                <div className={styles['comparsion']}>                
                    <CaloriesBurn
                        burnItemsToShow={this.props.burnItemsToShow}
                        clickShowedBurnItem={this.props.clickShowedBurnItem}/>
                    <CaloriesIntake
                        grow={this.state.grow}
                        intakeItemsToShow={this.props.intakeItemsToShow}
                        clickShowedIntakeItem={this.props.clickShowedIntakeItem}/>
                </div>
            </React.Fragment>
        )   
    }

}

export default comparsion