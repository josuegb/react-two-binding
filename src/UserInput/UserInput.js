import React from "react";

const userInput = (props) => {
    const style = { border: '4px solid green'};
    
    return <input style={style} type="text" onChange={props.changed} value={props.username}/>;
}

export default userInput;