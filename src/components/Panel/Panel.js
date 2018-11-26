import React from 'react'
// import styles from './CaloriesIntake.module.css'
import styles from './Panel.module.css'
import IntakeItem from './IntakeItem/IntakeItem'
import BurnItem from './BurnItem/BurnItem'

const panel = (props) => {
    
    const intakeItemsContent = props.intakeItems.map(singleIntakeItem => 
            <IntakeItem
                key={singleIntakeItem.name}
                name={singleIntakeItem.name}
                calories={singleIntakeItem.calories}
                description={singleIntakeItem.description}
                click={(name, calories) => props.clickIntakeItem(name, calories)}
                />
    )
    const burnItemsContent = props.burnItems.map(singleBurnItem => 
            <BurnItem
                key={singleBurnItem.name}
                name={singleBurnItem.name}
                calories={singleBurnItem.calories}
                description={singleBurnItem.description}
            />
    )

    return (
        <div className={styles['panel']}>
            <div><h3>INTAKE ITEMS</h3>{intakeItemsContent}</div>
            <div><h3>BURN ITEMS</h3>{burnItemsContent}</div>
        </div>
    
        
    )
}

export default panel