import React from "react";

const userInput = (props) => {
 return (
     <div>
         <input style={props.style} type="text" onChange={props.changed} value={props.username}/>
     </div>
 );
}

export default userInput;