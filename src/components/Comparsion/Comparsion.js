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
            <div className={styles['comparsion']}>
                <button onClick={this.growHandler}>GROW</button>
                <CaloriesBurn/>
                <CaloriesIntake
                    grow={this.state.grow}
                    intakeItemsToShow={this.props.intakeItemsToShow}/>
            </div>
        )   
    }

}

export default comparsion