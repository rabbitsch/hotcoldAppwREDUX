import React from 'react';

const Input= (props) => {
  return(
    <div className="inputface">
      <form onSubmit={props.Submiter}>
        <input type="text" onChange={props.change} placeholder="Type in Number here" numberGuessed={props.numberGuessed}
          userInput={props.userInput}></input>
        <button>Submit Your Answer</button>
    </form>

    </div>
  )
}

export default Input;
