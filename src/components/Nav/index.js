

import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {  // all these  are combined.  categories, and setCurrentCategory/ currentCategorey are 2 different useStates but and on the Nav(props) const {} object
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

        


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