import { Link } from "react-router-dom"; // Importación correcta para rutas internas
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade"; // Estilo para el desvanecimiento de las fotos
import styles from "./CardsAccion.module.scss";

const CardsAccion = ({ imagenes, titulo, descripcion, link }) => {
  return (
    <div className={styles.cardContenedor}>
      <div className={styles.imagenWrapper}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500, // Cambia la foto de la mascota cada 2.5 segundos
            disableOnInteraction: false,
          }}
          className={styles.fotoCarruselInterno}
        >
          {imagenes.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={imgUrl}
                alt={`${titulo} - foto ${index + 1}`}
                className={styles.cardFoto}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.cardCuerpo}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>

        {/* Usamos 'Link to' para que navegue sin recargar la web */}
        {link && (
          <Link to={link} className={styles.btnLink}>
            Ver más
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardsAccion;
