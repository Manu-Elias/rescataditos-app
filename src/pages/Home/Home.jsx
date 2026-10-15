import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles/Home.module.scss";
import rescuedImage from "../../assets/rescatado.jpg";
import shelterImage from "../../assets/refugio.jpg";
import CardsAccion from "../../components/CardsAccion";
import cardData from "../../data/cards";

const Home = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Rescataditos</h1>
          <p>
            Cambiando destinos desde 2011: rescatamos historias de abandono y
            las transformamos en vidas llenas de amor y cuidado.
          </p>
          <button>Como ayudar</button>
        </div>
      </section>

      <section className={styles.adoptionSection}>
        <div className={styles.adoptionContainer}>
          <img
            className={styles.petImage}
            src={rescuedImage}
            alt="Un perrito rescatado feliz esperando una familia"
          />
          <div>
            <h2 className={styles.adoptionTitle}>
              Cambiá un destino, encontrá a tu compañero de vida
            </h2>

            <p className={styles.adoptionMessage}>
              Adoptar no es simplemente meter una mascota a casa; es remendar un
              corazón que fue roto por el abandono. En Rescataditos sabemos que
              detrás de cada mirada triste hay un pasado de frío y olvido, pero
              también una capacidad infinita de perdonar y amar. Salvar a uno de
              nuestros animales no va a cambiar el mundo, pero tené por seguro
              que para él, su mundo habrá cambiado para siempre.
              <br />
              <br />
              Cada vez que le abrís las puertas de tu familia a un Rescatadito,
              estás haciendo el acto de justicia más hermoso que existe:
              transformar su dolor en una segunda oportunidad y dejar un lugar
              libre en nuestro refugio para poder correr a salvar otra vida que
              hoy nos necesita en la calle.
            </p>

            <button className={styles.adoptButton}>
              Quiero adoptar un Rescatadito
            </button>
          </div>
        </div>
      </section>

      <section className={styles.visitsSection}>
        <div className={styles.visitsContainer}>
          <div className={styles.infoBlock}>
            <h2 className={styles.visitsTitle}>
              Vení a conocer Rescataditos y transformá tu día
            </h2>
            <p className={styles.visitsMessage}>
              Cada una de nuestras visitas abre la puerta a un momento mágico de
              amor, juegos y lengüetazos. Venir al refugio no solo les regala a
              ellos una tarde de felicidad y compañía que tanto anhelan, sino
              que te llena el alma a vos. Animate a compartir unas horas con
              nuestros rescataditos; puede ser el inicio de una hermosa amistad
              o, quién sabe, el día que encuentres a tu nuevo mejor amigo.
            </p>
            <button className={styles.visitButton}>
              Agendá tu visita al refugio
            </button>
          </div>

          <div className={styles.imageBlock}>
            <img
              className={styles.visitPhoto}
              src={shelterImage}
              alt="Un voluntario sonriendo mientras un perro rescatado le da cariño"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN DEL CARRUSEL GENERAL CON FLECHAS INTEGRADAS */}
      <section className={styles.cardsSection}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000, // Un poquito más de tiempo para dar aire a las fotos internas
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".boton-next-tarjeta",
            prevEl: ".boton-prev-tarjeta",
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1400: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className={styles.cardsGrid}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              {/* Le pasamos el array de imágenes a tu componente */}
              <CardsAccion
                imagenes={card.imagenes}
                titulo={card.titulo}
                descripcion={card.descripcion}
                link={card.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas más chicas y posicionadas encima de las tarjetas extremas */}
        <button
          className={`${styles.carouselArrow} ${styles.arrowLeft} boton-prev-tarjeta`}
        >
          {" "}
          ‹{" "}
        </button>
        <button
          className={`${styles.carouselArrow} ${styles.arrowRight} boton-next-tarjeta`}
        >
          {" "}
          ›{" "}
        </button>
      </section>
    </>
  );
};

export default Home;
