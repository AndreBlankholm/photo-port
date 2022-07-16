// --------------------------- Tests ---------------------------------

import React from 'react';

import { render, cleanup } from '@testing-library/react';  // the cleanup function is used to remove componets from the dom and to prevent memory leaking
import '@testing-library/jest-dom/extend-expect';

// next we will import the component that we will test {About}
import About from '..';

afterEach(cleanup); // this will make sure we dont have to worry about any leftover memory

//declaire the component we are testing
describe('About component', () => {  // this is baseline to verify that the component is rendering
   // First Test
   it('renders', () => {  // it function. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
    render(<About />);
  });

  // Second Test
})
  