import React from 'react'

const Die = (props) => {
    const styles = {backgroundColor: props.isHeld ? "#59f391" : "#ffffff"}
    return(
        <div style={styles} className="die-holder"
        onClick={props.isHold}>
        <h2  className="die">{props.value}</h2>
        </div>
    )
}

export default Die