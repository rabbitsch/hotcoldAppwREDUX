import React from 'react';
import { connect } from 'react-redux';
import { setGuesses } from '../actions';
import store from '../store';

const Input = (props) => {
  console.log(props, 'here is the props form input')
  const handleSubmit = (event) => {
    event.preventDefault()

    // const myInput = props.input.value;
    // props.dispatch()

    const newGuess = event.target.elements.guess.value
    console.log(newGuess, 'this is new guess from input')
    const nextGuess = setGuesses(newGuess)
    store.dispatch(nextGuess)
    // console.log(nextGuess)
    // console.log(store.getState(),'this is the current store')
  }

  return(
    <div className="inputface">
      <form onSubmit={handleSubmit}>
        <input type="number" name='guess' onChange={props.onChange} placeholder="Type in Number here" />
        <button type='submit'>Submit Your Answer</button>
    </form>

    </div>
  )
}

export default connect () (Input);
