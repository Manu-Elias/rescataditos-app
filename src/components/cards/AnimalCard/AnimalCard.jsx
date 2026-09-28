import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Importamos los estilos nativos obligatorios de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./AnimalCard.module.scss";

const AnimalCard = ({ animal, children }) => {
  // Respetamos tu manejo original convirtiendo siempre en array para que gire
  const photosArray = Array.isArray(animal.photos)
    ? animal.photos
    : animal.photos
      ? [animal.photos]
      : ["https://unsplash.com"];

  return (
    <div className={styles.card}>
      {/* Tu contenedor de imagen original intacto */}
      <div className={styles.imageContainer}>
        {/* INYECTAMOS EL CARRUSEL INTERNO EN EL CONTENEDOR */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          observer={true}
          observeParents={true}
          className={styles.swiperContenedor}
        >
          {photosArray.map((photoUrl, index) => (
            <SwiperSlide key={index}>
              <img src={photoUrl} alt={`${animal.name} - ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tu etiqueta flotante original intacta */}
        <span className={styles.speciesTag}>{animal.species}</span>
      </div>

      {/* Toda tu sección de información, historia y botones original sin tocar */}
      <div className={styles.info}>
        <h2 className={styles.name}>{animal.name}</h2>
        <div className={styles.bodyDescription}>
          <p className={styles.history}>
            <strong>Historia:</strong> {animal.history}
          </p>
        </div>
        <div className={styles.actions}>{children}</div>
      </div>
    </div>
  );
};

export default AnimalCard;
