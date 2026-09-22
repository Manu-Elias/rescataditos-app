import styles from "./AnimalCard.module.scss";

const AnimalCard = ({ animal, children }) => {
  // Maneja si animal.fotos es un array o un string directo desde el formulario
  const urlFoto = Array.isArray(animal.fotos) ? animal.fotos[0] : animal.fotos;

  return (
    <div className={styles.tarjeta}>
      <div className={styles.imagenContenedor}>
        <img src={urlFoto || "https://unsplash.com"} alt={animal.nombre} />
        <span className={styles.etiquetaEspecie}>{animal.especie}</span>
      </div>

      <div className={styles.info}>
        <h2 className={styles.nombre}>{animal.nombre}</h2>
        <div className={styles.descripcionCuerpo}>
          <p className={styles.historia}>
            <strong>Historia:</strong> {animal.historia}
          </p>
        </div>
        <div className={styles.acciones}>{children}</div>
      </div>
    </div>
  );
};

export default AnimalCard;
