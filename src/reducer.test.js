import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {setGuesses} from './actions';
import {SET_GUESSES} from './actions';
import {guesserReducer} from './reducer';

describe('set guess', ()=>{
  it('should set my guess',() =>{
    let state ={
      guesses: [1,2,3]
    };
    state = guesserReducer(state, setGuesses(4));
    state = guesserReducer(state, setGuesses(5));
    state = guesserReducer(state, setGuesses(6));
    expect(state).toEqual({
      guesses:[1,2,3,4,5,6],
      feedback: "you got it!"
    })
  })
})
