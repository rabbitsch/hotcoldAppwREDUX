import React from 'react';
import { configure,shallow } from 'enzyme';

import { Content } from './displayCont';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Content />', () => {

  it('Renders without crashing', () => {
      const guesses = ['foo','bar'];
      for(let i =0; i<guesses.length;i++){
        const guess = guesses[i];

      shallow(<Content guesses ={[]}/>);
     }
  });


})
