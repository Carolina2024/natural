import { PhotoContext } from "../context/PhotoContext"; /* se agrega para accder a las fotos */
import { Card,Col,} from "react-bootstrap"; /* se agrega para crear card y col */
import IconHeart from "./IconHeart"; /* se agrega para mostrar el corazon */
import { useContext } from "react"; /* se agrega en forma automatica, para acceder a PhotoContext */

const Gallery = () => {
  /* REQUERIMIENTO 4 */
  const { photos, toggleLike } =
    useContext(
      PhotoContext
    ); /* se utiliza useContext para obtener photos y toggleLike desde PhotoContext */

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map(
        (
          photo /* itera sobre el arreglo photos, creando un nuevo elemento para cada foto */
        ) => (
          <Col key={photo.id}>
            {" "}
            {/* para cada foto se crea Col, con photo.id como clave key */}
            <Card
              onClick={() =>
                toggleLike(photo.id)
              } /* con evento onClick que llama a toggleLike con el id de la foto */
              style={{ cursor: "pointer", marginBottom: "8px" }}
              className="text-white photo-card mb-3 w-100"
            >
              <div className="card-img-container position-relative text-start text-white">
                <Card.Img
                  src={photo.src.tiny} /* la foto */
                  alt={photo.alt} /* el texto */
                  className="img-fluid no-border-radius" /* responsiva */
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                  {" "}
                  {/* para superponer contenido sobre la imagen */}
                  <Card.Text className="text-end">
                    <IconHeart filled={photo.liked} />{" "}
                    {/* prop filled de IconHeart segun estado liked de la foto del arreglo false white */}
                  </Card.Text>
                  <Card.Text className="text-left w-100 m-0">
                    {photo.alt}
                  </Card.Text>{" "}
                  {/* para el texto de la foto */}
                </Card.ImgOverlay>
              </div>
            </Card>
          </Col>
        )
      )}
    </div>
  );
};

export default Gallery;
