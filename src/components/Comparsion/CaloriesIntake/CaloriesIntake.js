import React from 'react'
import styles from './CaloriesIntake.module.css'
import CaloriesIntakeAvatar from './CaloriesIntakeAvatar/CaloriesIntakeAvatar'

const caloriesIntake = (props) => {
    
    if (props.intakeItemsToShow.length===0) {return<div className={styles['caloriesIntake']}>Go get some food <span role="img" aria-label="Slice of Pizza">🍕</span> below ⬇ </div>}
    
    const intakeAvatarContent = props.intakeItemsToShow.map((singleItem, mapIndex) => 
        <CaloriesIntakeAvatar
            key={singleItem.name+mapIndex}
            name={singleItem.name}
            calories={singleItem.calories}
            description={singleItem.description}
            icon={singleItem.icon}
            uniqueName={singleItem.uniqueName}
            click={(uniqueName, calories) => props.clickShowedIntakeItem(uniqueName, calories)}
            />
    )

    
    
    return (
        <div className={styles['caloriesIntake']}>
        {intakeAvatarContent}
        </div>
    )
        }
    


export default caloriesIntake