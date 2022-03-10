import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  //se puede renombrar en la desestructuracion
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className='animate__animated animate__fadeIn'>Cargando...</p>
      )}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
