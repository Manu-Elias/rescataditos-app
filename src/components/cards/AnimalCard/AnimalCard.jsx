import styles from "./AnimalCard.module.scss";

const AnimalCard = ({ animal, children }) => {
  // Maneja si animal.images es un array o un string directo desde el formulario

  const photoUrl = Array.isArray(animal.photos)
    ? animal.photos[0]
    : animal.photos;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={photoUrl || "https://unsplash.com"} alt={animal.name} />
        <span className={styles.speciesTag}>{animal.species}</span>
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
