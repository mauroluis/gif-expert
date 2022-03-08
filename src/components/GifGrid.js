import React, { useState, useEffect } from 'react';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=dbsuper&limit=10&api_key=EsP0o7rSSB7uIOZQo2pSTT2UlBucdLLE';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        //usando un ? antes de llamar al recurso evita un posible error de undefined
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title, url }) => {
          return (
            <li key={id}>
              {title}
              <br />
              <img src={`${url}`} alt={`${title}`} />
              <hr />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default GifGrid;
