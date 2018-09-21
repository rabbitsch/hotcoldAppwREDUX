import React from 'react';


const Content = (props) => {
  console.log(props)

  if (!props.guesses.length) {
    return <p>There are no guesses to show.</p>
  }

  return (
    <div>
      <ul className="contentDisp">
        {props.guesses.map(guess => <li key={guess}>{guess}</li>)}
        <li>{props.feedback}</li>
      </ul>
    </div>
  )
}

export default Content;
