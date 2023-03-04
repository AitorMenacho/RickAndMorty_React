import { ApiRickAndMorty } from "../../api/ApiRickAndMorty";

export const Tarjeta = ({ pagina, nombre, estado }) => {
  const { data } = ApiRickAndMorty({ pagina, nombre, estado });

  if (data.length === 0) return <h1>Cargando...</h1>;

  const verMas = ( id ) => {

    window.location.href = `/personaje/${id}`;

  }

  return (
    <>
      {data.map((personaje) => (
        <div className="tarjeta" onClick={ () => verMas(personaje.id) } key={personaje.id}>
          <div className="imagen">
            <img
              src={`https://rickandmortyapi.com/api/character/avatar/${personaje.id}.jpeg`}
              alt={personaje.name}
            />
          </div>
          <div className="info">
            <h2>{personaje.name}</h2>
            <p>
              Estado:{" "}
              {personaje.status === "Alive"
                ? "Vivo"
                : personaje.status === "Dead"
                ? "Muerto"
                : "Desconocido"}
            </p>
            <p>Especie: {personaje.species}</p>
            <p>
              Genero:{" "}
              {personaje.gender === "Male"
                ? "Masculino"
                : personaje.gender === "Female"
                ? "Femenino"
                : "Desconocido"}
            </p>
            <p>
              Origen:{" "}
              {personaje.origin.name === "unknown"
                ? "Desconocido"
                : personaje.origin.name}
            </p>
            <p>Ultima localización: {personaje.location.name}</p>
          </div>
        </div>
      ))}
    </>

  );
};
