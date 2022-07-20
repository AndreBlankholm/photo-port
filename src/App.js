import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([  // using UseState without the setter. // so.. [value, no setter] = useState([])
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);   // Hook

  return (
    <div>
      <Nav
        categories={categories}  
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery> 
        <About></About>
      </main>
    </div>
  );
}
                                                            // ^ We need to pass the current category, which is the category selected by the user, from the Gallery component in App.js
export default App;