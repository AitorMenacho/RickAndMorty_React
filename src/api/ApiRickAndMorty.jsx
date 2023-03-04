import { useEffect, useState } from "react";

export const ApiRickAndMorty = ({ pagina, nombre, estado }) => {
  //conexión a la API
  let url = `https://rickandmortyapi.com/api/character?page=${pagina}&name=${nombre}&status=${estado}`;

  const [data, setData] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setCantidad(data.info.pages);
      });
  }, [url]);

  return {
    data, 
    cantidad
  }

};
