import React from "react"; // importing react
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";


const currentCategory = {
  name: "commerical",
  discription: "Photos of grocery stores, food trucks, and other commercial projects",
};

function Gallery(props) {
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>  
      <p>{currentCategory.name}</p>
      <div>
        <img 
        src = {photo} 
        alt="Commercial Example"
        className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Gallery; // exporting the function
