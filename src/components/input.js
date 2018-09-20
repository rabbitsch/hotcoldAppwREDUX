import React from 'react';

const Input= (props) => {
  return(
    <div className="inputface">
      <form onSubmit={props.submitHandler}>
        <input type="text" onChange={props.change} placeholder="Type in Number here" numberGuessed={props.numberGuessed}></input>
        <button onClick={()=>props.handleInputEvent()}>Submit Your Answer</button>
    </form>

    </div>
  )
}

export default Input;
