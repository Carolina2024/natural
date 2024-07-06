import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Favorites = () => {
  /* REQUERIMIENTO 4 */
  const { liked } =useContext(PhotoContext); /* useContext para obtener el estado liked desde PhotoContext */

  return (
    <div className="App">
      {/* se agrega class */}
      <h1 className="mt-2 fw-bold">Fotos favoritas</h1>
      <div className="p-4 gallery grid-columns-4">
        {liked.map(
          (
            photo /* se itera sobre el arreglo liked con map, creando un nuevo elemento para cada foto favorita */
          ) => (
            <div key={photo.id} className="gallery-item">
              {" "}
              {/* para cada foto favorita se crea un div con photo.id como clave key */}
              <img
                src={photo.src.tiny} /* la foto */
                alt={photo.alt} /* texto */
                className="gallery-image w-100"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Favorites;
