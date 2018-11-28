import React from 'react'


const intakeItem = (props) => {
    

    return (
        <div onClick={ () => props.click(props.name, props.calories, props.uniqueName)} style={{fontSize: '.7em', padding: '.2em', margin: '.2em', cursor: 'pointer', backgroundColor: 'blanchedalmond'}}>
            <div>{props.name}</div>
            <div>{props.calories}</div>
            <div>{props.description}</div>
        </div>
        
    
        
    )
}

export default intakeItem