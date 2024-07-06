import { useEffect,useState,createContext } from "react"; /* useEffect manejar efectos secundarios, useState estado y createContext crear contexto */

/* REQUERIMIENTO 1 */
export const PhotoContext =
  createContext(); /* se crea un contexto para las fotos, se exporta para que otros componentes lo usen */

const PhotoProvider = ({ children }) => {
  /* componente funcional que toma un prop children */

  /* REQUERIMIENTO 3 */
  const [photos, setPhotos] = useState(
    []
  ); /* estado photos con su funcion de actualizacion setPhotos, se inicia en arreglo vacio, para almacenar las fotos */
  const liked = photos.filter(
    (photo) => photo.liked
  ); /* se crea liked con metodo filter sobre el arreglo photos, que contiene solo las fotos que tienen la prop liked */

  /* para cargar las fotos al montar el componente, se ejecuta una vez, hace solicitud para obtener photos.json */
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch("./photos.json");
        const data = await res.json();
        setPhotos(data.photos);
      } catch (e) {
        alert("ERROR AL RECUPERAR LAS FOTOS", e);
      }
    };
    fetchPhotos();
  }, []);

  /* esta funcion toma un id de una foto y alterna su estado de like en el arreglo photos, entre liked y unliked, crea nueva version del arreglo con liked */
  const toggleLike = (id) => {
    const nPhotos = photos.map((photo) => {
      /* iterar sobre cada foto, se crea nuevo arreglo */
      if (photo.id === id) {
        /* si el id de la foto coincide con el id proporcionado a la funcion toggleLike */
        return {
          ...photo,
          liked: !photo.liked,
        }; /* devuelve nuevo objeto, copia de la foto original con liked invertida, si era true ahora es false */
      }
      return photo; /* si el id de la foto no coincide con el id, se devuelve la foto original sin cambios */
    });
    setPhotos(nPhotos); /* se actualiza el estado con el nuevo arreglo */
  };

  /* provee el valor del contexto a children */
  return (
    <PhotoContext.Provider
      value={{
        photos,
        liked,
        toggleLike,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
