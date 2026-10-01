import { Link } from "react-router-dom";
import styles from "./Animales.module.scss";
import useAnimalStore from "../store/useAnimalStore.js";
import AnimalCard from "../components/cards/AnimalCard/AnimalCard.jsx";

const Animales = () => {
  const animals = useAnimalStore((state) => state.animals);

  return (
    <div className={styles.contenedor}>
      {animals.map((animal) => (
        <Link
          className={styles.link}
          to={`/animales/${animal.id}`}
          key={animal.id}
        >
          <AnimalCard animal={animal}>
            <span>Ver Mas...</span>
          </AnimalCard>
        </Link>
      ))}
    </div>
  );
};

export default Animales;
