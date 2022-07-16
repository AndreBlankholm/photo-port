// --------------------------- Tests ---------------------------------

import React from 'react';

import { render, cleanup } from '@testing-library/react';  // the cleanup function is used to remove componets from the dom and to prevent memory leaking
import '@testing-library/jest-dom/extend-expect';

// next we will import the component that we will test {About}
import About from '..';

afterEach(cleanup); // this will make sure we dont have to worry about any leftover memory

//declaire the component we are testing
describe('About component', () => {  // this is baseline to verify that the component is rendering
   // First Test  //aka component test
   it('renders', () => {  // it function. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
    render(<About />);
  });

  // Second Test// aka snap shot test or "test case"
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);  // asFragment  returns a snapshot of the About component
    expect(asFragment()).toMatchSnapshot();    // we'll use the toMatchSnapshot matcher to assert that snapshots will match:
  });
})
  

