import React from 'react';
import '../index.css';

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className='card animate__animated animate__bounce'>
      <li key={id}>
        <img src={`${url}`} alt={`${title}`} />
        <p>{title}</p>
        <hr />
      </li>
    </div>
  );
};

export default GifGridItem;
