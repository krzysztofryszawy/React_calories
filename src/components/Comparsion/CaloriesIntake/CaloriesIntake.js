import React from 'react'
import styles from './CaloriesIntake.module.css'
import CaloriesIntakeAvatar from './CaloriesIntakeAvatar/CaloriesIntakeAvatar'

const caloriesIntake = (props) => {
    
    
    const intakeAvatarContent = props.intakeItemsToShow.map((singleItem, mapIndex) => 
        <CaloriesIntakeAvatar
            key={singleItem.name+mapIndex}
            name={singleItem.name}
            calories={singleItem.calories}
            description={singleItem.description}
            />
    )

    
    
    return (
        <div style={{flexGrow: props.grow}} className={styles['caloriesIntake']}>
        1cal 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 
        {intakeAvatarContent}
        </div>
    )
        }
    


export default caloriesIntake