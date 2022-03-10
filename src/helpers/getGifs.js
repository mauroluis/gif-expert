export const getGifs = async (category) => {
  //formatear para que se envie querie sin espacios y genere no errores
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=EsP0o7rSSB7uIOZQo2pSTT2UlBucdLLE`;
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
  return gifs;
};
