import React from 'react';
import Nav from './components/Nav';
import About from './components/About';  //importing the components file

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />        
      </main>
    </div>
  );
}

export default App;
