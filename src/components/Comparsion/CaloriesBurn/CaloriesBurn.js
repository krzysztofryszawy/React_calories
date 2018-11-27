import React from 'react'
import styles from './CaloriesBurn.module.css'
import CaloriesBurnAvatar from './CaloriesBurnAvatar/CaloriesBurnAvatar'

const caloriesBurn = (props) => {

    const burnAvatarContent = props.burnItemsToShow.map((singleItem, mapIndex) => 
        <CaloriesBurnAvatar
            key={singleItem.name+mapIndex}
            name={singleItem.name}
            calories={singleItem.calories}
            description={singleItem.description}
            icon={singleItem.icon}
            uniqueName={singleItem.uniqueName}
            click={(uniqueName) => props.clickShowedBurnItem(uniqueName)}
            />
    )

    
    
    return (
        <div className={styles['caloriesBurn']}>
        {burnAvatarContent}
        </div>
    )
        
}

export default caloriesBurn