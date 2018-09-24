import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Input from './input';

configure({adapter: new Adapter()});


describe('<Input />', ()=>{

it('should render without crashing', () => {
  shallow(<Input />);
})

  // it('should recieve input from user', () =>{
  //   const wrapper = shallow(<Input />);
  //   expect(wrapper.find(Input)).toHaveLength(1);
  // });
});
