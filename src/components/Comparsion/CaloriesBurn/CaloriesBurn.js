import React from 'react'
import styles from './CaloriesBurn.module.css'
import CaloriesBurnAvatar from './CaloriesBurnAvatar/CaloriesBurnAvatar'

const caloriesBurn = (props) => {

    if (props.burnItemsToShow.length===0) {return<div className={styles['caloriesBurn']}>Choose some excersices <span role="img" aria-label="Table Tennis Paddle and Ball">🏓</span> below ⬇ </div>}

    const burnAvatarContent = props.burnItemsToShow.map((singleItem, mapIndex) => 
        <CaloriesBurnAvatar
            key={singleItem.name+mapIndex}
            name={singleItem.name}
            calories={singleItem.calories}
            description={singleItem.description}
            icon={singleItem.icon}
            uniqueName={singleItem.uniqueName}
            click={(uniqueName, calories) => props.clickShowedBurnItem(uniqueName, calories)}
            />
    )

    
    
    return (
        <div className={styles['caloriesBurn']}>
        {burnAvatarContent}
        </div>
    )
        
}

export default caloriesBurn