
import React, { useEffect } from 'react';  // this useEffect is for the useEffect case on line 13
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {  // all these  are combined.  categories, and setCurrentCategory/ currentCategorey are 2 different useStates but and on the Nav(props) const {} object
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {     //  to update the tab on the browser to reflect the user's category selection
    document.title = capitalizeFirstLetter(currentCategory.name); //(1)Notice in the preceding code block that the first argument is the callback function, and the second argument is an array with a single element, currentCategory. 
  }, [currentCategory]);                                          // (2)The second argument directs the hook to re-render the component on changes to the value of this state.
                         


  const handleClick = (item) => {  // this is the defined onclik method that needs to be defined above the return statement
    console.log(item);   
    return item;        
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>

          {categories.map((category) => (   // maping over the array in (Apps)// Looks like this {categories.map((category) => ())}
            <li
              className={`mx-1 ${
                currentCategory.name === category.name   //also setting class mx-1
                }`}
              key={category.name}  //we used .name because we dont expect any categoires to share the sam name.  often the key will be an ID
            >
              <span
                onClick={() => {   // setting up an onclick event listeners with Villa JS 
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;