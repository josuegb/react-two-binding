import React from 'react';
import './UserOutput.scss'

const userOutput = (props) => {
 return (
     <div className="UserOutput">
         <h2>{props.username}</h2>
         <p>{props.text1}</p>
         <p>{props.text2}</p>         
     </div>
 );
}

export default userOutput;