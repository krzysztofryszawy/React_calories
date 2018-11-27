import React from 'react'
// import styles from './CaloriesIntake.module.css'
import styles from './Panel.module.css'
import IntakeItem from './IntakeItem/IntakeItem'
import BurnItem from './BurnItem/BurnItem'

const panel = (props) => {
    
    const intakeItemsContent = props.intakeItems.map((singleIntakeItem, mapIndex) => 
            <IntakeItem
                key={singleIntakeItem.name+mapIndex}
                name={singleIntakeItem.name}
                calories={singleIntakeItem.calories}
                description={singleIntakeItem.description}
                icon={singleIntakeItem.icon}
                click={(name, calories, uniqueName) => props.clickIntakeItem(name, calories, uniqueName)}
                />
    )
    const burnItemsContent = props.burnItems.map((singleBurnItem, mapIndex) => 
            <BurnItem
                key={singleBurnItem.name+mapIndex}
                name={singleBurnItem.name}
                calories={singleBurnItem.calories}
                description={singleBurnItem.description}
                icon={singleBurnItem.icon}
                uniqueName={singleBurnItem.name+Date.now()}
                click={(name, calories, uniqueName) => props.clickBurnItem(name, calories, uniqueName)}
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