import React from 'react';


const Content = (props) =>{
  return(
    <div>
      <ul className="contentDisp">
        <li>{props.userGuess}</li>
      </ul>
    </div>
  )
}

export default Content;
