import React from 'react';
import setGuesses from '../actions';
import { connect } from 'react-redux';
import store from '../store';



export const Content = (props) => {
  console.log(props, "before my guess on display cont")
  console.log(store.getState(),' store from my display cont')
  const guesses = props.guesses.map((guess, index) =>(<li key={index}>{guess}</li>));
  console.log(guesses, 'from display cont')

  return (
    <div>
      <ul className="contentDisp">
        {guesses}
        <li>{props.feedback}</li>
      </ul>
    </div>
  )
}

// export default Content;

const mapStateToProps = state =>({
  guesses: state.guesses,
  feedback: state.feedback
})

export default connect(mapStateToProps)(Content);
