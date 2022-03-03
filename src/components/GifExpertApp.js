import React, { useState } from 'react';
import AddCategory from './AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['DBZ', 'Naruto']);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
