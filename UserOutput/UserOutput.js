import React from 'react';
import './UserOutput.css'
const userOutput = (props)=>{
  return(
    <div className="UserOutput">
    <p> para 1 </p>
    <p>userName is {props.name} </p>
    </div>
  );
}
export default userOutput;
