import styles from "./Nosotros.module.scss";
import equipoOng from "../assets/equipo-rescataditdos.jpg";
const Nosotros = () => {
  return (
    <main>
      <section className={styles.historiaOng}>
        <h1>Conocé nuestra historia</h1>
        <p>
          ¿Cómo nació Rescataditos? Conocé nuestra historia Rescataditos es una
          organización dedicada al rescate, cuidado y protección de animales en
          situación de abandono. Desde su creación en 2011, trabaja para brindar
          una segunda oportunidad a perros y gatos que necesitan atención,
          recuperación y un hogar responsable. A lo largo de los años, la
          organización ha contado con el apoyo de voluntarios, hogares de
          tránsito y adoptantes comprometidos con el bienestar animal. Gracias a
          ese esfuerzo conjunto, numerosos animales pudieron recuperarse y
          encontrar una familia. Actualmente, Rescataditos continúa
          desarrollando tareas de rescate, asistencia veterinaria, difusión y
          adopción responsable, promoviendo además la concientización sobre el
          cuidado y respeto hacia los animales.
        </p>
        <h2>¿Cómo fue creciendo?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          accusamus omnis ipsa. Vero suscipit molestiae numquam eius, porro
          fugit praesentium rem aut deleniti est, architecto modi quaerat, sequi
          saepe eum.
        </p>
        <h2>¿Qué hace hoy?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit commodi a unde odio, ipsum hic numquam. Perferendis
          error quae harum aperiam aspernatur voluptatum vel incidunt, magnam
          quos dolor ducimus dolorem!
        </p>
        <figure className={styles.figure}>
          <img className={styles.image} src={equipoOng} alt="" />
          <figcaption className={styles.caption}>
            Parte de la familia de Rescataditos junto a algunos de los animales
            que encontraron una segunda oportunidad.
          </figcaption>
        </figure>
      </section>
      <section className={styles.misionOng}>
        <h2>🐾 Nuestra misión</h2>
        <p>
          Nuestra misión Trabajar cada día para rescatar, proteger y mejorar la
          calidad de vida de animales en situación de vulnerabilidad, fomentando
          la adopción responsable y el compromiso de la comunidad con el
          bienestar animal.
        </p>
      </section>
    </main>
  );
};

export default Nosotros;
