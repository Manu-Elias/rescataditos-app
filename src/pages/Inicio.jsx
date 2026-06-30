import styles from "./Inicio.module.scss";
import imagenRescatado from "../assets/rescatado.jpg";
import refugio from "../assets/refugio.jpg";
import CardsAccion from "../components/CardsAccion";
import datosDeLasCards from "../data/cards";

const Inicio = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.contenido}>
          <h1>Rescataditos</h1>
          <p>
            Cambiando destinos desde 2011: rescatamos historias de abandono y
            las transformamos en vidas llenas de amor y cuidado.
          </p>
          <button>Como ayudar</button>
        </div>
      </section>

      <section className={styles.animalAdopcion}>
        <div className={styles.contenedorAdopcion}>
          <img
            className={styles.mascotaFoto}
            src={imagenRescatado}
            alt="Un perrito rescatado feliz esperando una familia"
          />
          <div>
            <h2 className={styles.tituloAdopcion}>
              Cambiá un destino, encontrá a tu compañero de vida
            </h2>

            <p className={styles.mensajeAdopcion}>
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

            <button className={styles.btnAdoptar}>
              Quiero adoptar un Rescatadito
            </button>
          </div>
        </div>
      </section>

      <section className={styles.seccionVisitas}>
        <div className={styles.contenedorVisitas}>
          <div className={styles.bloqueInformacion}>
            <h2 className={styles.tituloVisitas}>
              Vení a conocer Rescataditos y transformá tu día
            </h2>
            <p className={styles.mensajeVisitas}>
              Cada una de nuestras visitas abre la puerta a un momento mágico de
              amor, juegos y lengüetazos. Venir al refugio no solo les regala a
              ellos una tarde de felicidad y compañía que tanto anhelan, sino
              que te llena el alma a vos. Animate a compartir unas horas con
              nuestros rescataditos; puede ser el inicio de una hermosa amistad
              o, quién sabe, el día que encuentres a tu nuevo mejor amigo.
            </p>
            <button className={styles.btnVisitas}>
              Agendá tu visita al refugio
            </button>
          </div>

          <div className={styles.bloqueImagen}>
            <img
              className={styles.fotoVisita}
              src={refugio}
              alt="Una voluntaria sonriendo mientras un perro rescatado le da cariño"
            />
          </div>
        </div>
      </section>

      <section className={styles.seccionCards}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`}> ← </button>
        <div className={styles.grilla}>
          {datosDeLasCards.map((tarjeta) => (
            <CardsAccion
              key={tarjeta.id}
              imagen={tarjeta.imagen}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              link={tarjeta.link}
            />
          ))}
        </div>
        <button className={`${styles.arrow} ${styles.arrowRight}`}> → </button>
      </section>
    </>
  );
};

export default Inicio;
