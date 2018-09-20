import React from 'react';


const Content = (props) =>{
  return(
    <div>
      <ul className="contentDisp">
        <li>{props.userGuessed}</li>
      </ul>
    </div>
  )
}

export default Content;
