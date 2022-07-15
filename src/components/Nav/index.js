import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {    //use the .map() function inside a JSX expression
  const  categories = [   // First we'll define the categories in an array above the return statement. Instead of just listing each category's name
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },  //each catergories name and a short description
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
  ]; // categories name: is being used as a key in the mapping process

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (   //  <-------------  Here we are mapping over the array for the categories //Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. This helps React keep track of items in the virtual DOM.
              <li className="mx-1" key={category.name} >   
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;  // exporting to App.js