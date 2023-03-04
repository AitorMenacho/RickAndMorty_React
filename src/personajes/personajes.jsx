import "./css/personajes.css";
import { Tarjeta } from "./component/Tarjeta";
import { useEffect, useState } from "react";
import { ApiRickAndMorty } from "../api/ApiRickAndMorty";

export const Personajes = () => {
  const [pagina, setPagina] = useState(1);
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    pagina === 1
      ? (document.getElementById("paginaAnterior").disabled = true)
      : (document.getElementById("paginaAnterior").disabled = false);
  }, [pagina]);

  const buscaNombre = (e) => {
    setNombre(e.target.value);
  };

  const paginaAnterior = () => {
    setPagina(pagina - 1);
  };

  const paginaSiguiente = () => {
    setPagina(pagina + 1);
  };

  const buscaEstado = (e) => {
    setEstado(e.target.value);
  };

  var { cantidad } = ApiRickAndMorty({ pagina, nombre, estado });

  useEffect(() => {
    pagina === cantidad
      ? (document.getElementById("paginaSiguiente").disabled = true)
      : (document.getElementById("paginaSiguiente").disabled = false);
  }, [pagina, cantidad]);

  return (
    <>
      <h1>Rick and Morty</h1>
      <br />
      <div className="container">
        <div className="filtrador">
          <div className="filtraNombre">
            <h2>Nombre:</h2>
            <input type="text" name="nombre" onKeyUp={buscaNombre} />
          </div>
          <div className="filtraEstado">
            <h2>Estado:</h2>
            <select name="selector" onChange={buscaEstado}>
              <option value="">Todos</option>
              <option value="alive">Vivo</option>
              <option value="dead">Muerto</option>
              <option value="unknow">Desconocido</option>
            </select>
          </div>
        </div>
        <div className="paginacion">
          <button
            className="botonPaginacion"
            id="paginaAnterior"
            onClick={paginaAnterior}
          >
            Anterior
          </button>
          <button
            className="botonPaginacion"
            id="paginaSiguiente"
            onClick={paginaSiguiente}
          >
            Siguiente
          </button>
        </div>
        <div className="tarjetas">
          <Tarjeta pagina={pagina} nombre={nombre} estado={estado} />
        </div>
      </div>
    </>
  );
};
