import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';




function Gallery(props) { ///added photo list <PhotoList category={currentCategory.name} /> so it could used in 
  
  const { currentCategory } = props;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />  
    </section>
  );
}                             
export default Gallery;  //added photo list  to promps by -----(category as seen here )-----<PhotoList category={currentCategory.name} /> so it could used in 

