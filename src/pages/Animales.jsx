import { Link } from "react-router-dom";
//import datos from "../data/animales";
import { getAnimals } from "../services/animalesService.js";
import styles from "./Animales.module.scss";
import { useQuery } from "@tanstack/react-query";

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
          <div className={styles.tarjeta}>
            <h2>{animal.name} </h2>
            <p>Especie: {animal.address.city}</p>
            <p>Edad: {animal.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Animales;
