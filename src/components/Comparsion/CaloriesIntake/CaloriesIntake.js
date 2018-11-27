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
            icon={singleItem.icon}
            uniqueName={singleItem.uniqueName}
            click={(uniqueName) => props.clickShowedIntakeItem(uniqueName)}
            />
    )

    
    
    return (
        <div style={{flexGrow: props.grow}} className={styles['caloriesIntake']}>
        {intakeAvatarContent}
        </div>
    )
        }
    


export default caloriesIntake