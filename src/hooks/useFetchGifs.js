import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
//los hooks tambien pueden usar otros hooks

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      return setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 500);
    });
  }, [category]);

  return state;
};
