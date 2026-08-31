import { Link } from "react-router-dom";
import { getAnimals } from "../services/animalesService.js";
import styles from "./Animales.module.scss";
import { useQuery } from "@tanstack/react-query";
import AnimalCard from "../components/cards/AnimalCard/AnimalCard.jsx";
import { SiPanasonic } from "react-icons/si";

const Animales = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ["animales"],
    queryFn: getAnimals
  })

  if (isLoading) return <p>Cargando....</p>;
  if (isError) return <p>No se encontraron Animales</p>;

  return (
    <div className={styles.contenedor}>
      {data.map((animal) => (
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
