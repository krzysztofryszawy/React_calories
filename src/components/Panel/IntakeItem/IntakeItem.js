import React from 'react'


const intakeItem = (props) => {
    

    return (
        <div onClick={ () => props.click(props.name, props.calories, props.uniqueName)} style={{padding: '.5em', margin: '.5em', cursor: 'pointer', backgroundColor: 'white'}}>
            <div>{props.name}</div>
            <div>{props.calories}</div>
            <div>{props.description}</div>
        </div>
        
    
        
    )
}

export default intakeItem