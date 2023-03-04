import { SacaPersonaje } from "../../api/SacaPersonaje";
import "../css/style.css";

export const Personaje = () => {
  const id = window.location.href.split("/").pop();

  const { data } = SacaPersonaje({ id });

  if (data.length === 0) return <h3>Cargando...</h3>;

  return (
    <>
      <a className="boton" href="/">Volver</a>
      <div className="cabecera">
        <img src={data.image} alt={data.name} />
        <h1>{data.name}</h1>
      </div>
      <div className="cuerpo">
        <div className="cajas">
          <h2>DATOS</h2>
          <div className="datos">
            <b>Estado: </b> { data.status === "Alive" ? "Vivo" : "Muerto"}
            <br />
            <b>Especie: </b> { data.species }
            <br />
            <b>Genero: </b> { data.gender === "Male" ? "Masculino" : ( data.gender === "Female" ) ? "Femenino" : "No especificado" }
            <br />
            <b>Origen: </b> {data.origin.name === "unknown" ? "Desconocido" : data.origin.name}
            <br />
            <b>Ubicación: </b> {data.location.name === "unknown" ? "Desconocido" : data.location.name}
          </div>
        </div>
        <div className="cajas">
          <h2>EPISODIOS</h2>
          <div className="datos">
            <b>Cantidad: </b> {data.episode.length}
          </div>
        </div>
      </div>
    </>
  );
};
