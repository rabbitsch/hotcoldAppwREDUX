import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {setGuesses} from './actions';


describe('test set guess', ()=>{
  it('should test my set guess is working', ()=>{

    const SET_GUESSES = 'SET_GUESSES'
    const guess = 11;
    const action = setGuesses(guess);
    expect(action.type).toEqual(SET_GUESSES);
    expect(action.guess).toEqual(guess);

  })

})
