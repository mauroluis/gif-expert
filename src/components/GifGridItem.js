import React from 'react';

const GifGridItem = ({ id, title, url }) => {
  return (
    <div>
      <li key={id}>
        {title}
        <br />
        <img src={url} alt={title} />
        <hr />
      </li>
    </div>
  );
};

export default GifGridItem;
