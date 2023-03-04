import { useEffect, useState } from "react";

export const SacaPersonaje = ({ id }) => {
  
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        });
    }, [id]);
    
    return {
        data
    }

}
