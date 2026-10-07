import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { translateSpecies } from "../../../features/animals/utils/translateSpecies";
import styles from "./AnimalCard.module.scss";

const AnimalCard = ({ animal, children }) => {
  const photosArray = Array.isArray(animal.photos)
    ? animal.photos
    : animal.photos
      ? [animal.photos]
      : ["https://unsplash.com"];

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* INYECTAMOS EL CARRUSEL INTERNO EN EL CONTENEDOR */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000, // Avanza cada 3 segundos
            disableOnInteraction: false, // Continúa el autoplay aunque el usuario toque las flechas o puntos
            pauseOnMouseEnter: true, // Pausa la animación si el usuario pone el cursor sobre la foto
          }}
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

        <span className={styles.speciesTag}>
          {translateSpecies(animal.species)}
        </span>
      </div>

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
