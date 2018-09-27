import React from 'react';

import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


import { Input } from './input';
// import store from '../store';

import {setGuesses} from '../actions';
import {Provider} from 'react-redux';

configure({adapter: new Adapter()});


describe('<Input />', ()=>{

it('should render without crashing', () => {
  shallow(<Input />);
})


it('Dispatches setGuess from Guess', () =>{
  const dispatch = jest.fn();
  const wrapper = mount(
    <Input  dispatch={dispatch} />
  )
    const guess = [1]
  wrapper.find('input[type="number"]').instance().value = guess;
  // const instance = wrapper.instance();
  // const guess = [1]
  wrapper.simulate('submit');
  // instance.setGuesses(guess);
  // expect(dispatch).toHaveBeenCalledWith(setGuesses(guess))
})
  // it('should recieve input from user', () =>{
  //   const wrapper = shallow(<Input />);
  //   expect(wrapper.find(Input)).toHaveLength(1);
  // });
});


// export default connect () (Input);
