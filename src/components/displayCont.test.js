import React from 'react';
import { configure,shallow } from 'enzyme';

import Content from './displayCont';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Content />', () => {

  it('Renders without crashing', () => {
      const guesses = ['foo','bar'];
      for(let i =0; i<guesses.length;i++){
        const guess = guesses[i];

      shallow(<Content guesses = {guesses} />);
    }
  });

  // it('Renders the feedback', () => {
  //   const guesses = wrapper.find(guesses).map(guess => guess);
  //   const feedback = "foo";
  //   // {props.guesses.map(guess => <li key={guess}>{guess}</li>)}
  //   const wrapper = shallow(<Content feedback={feedback} />);
  //   expect(wrapper.feedback()).toEqual(feedback)
  // })
})
