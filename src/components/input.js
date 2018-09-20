import React from 'react';

const Input = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const newGuess = event.target.elements.guess.value
    props.onSubmit(newGuess)
  }

  return(
    <div className="inputface">
      <form onSubmit={handleSubmit}>
        <input type="text" name='guess' onChange={props.onChange} placeholder="Type in Number here" />
        <button type='submit'>Submit Your Answer</button>
    </form>

    </div>
  )
}

export default Input;
