import { useParams, useNavigate } from "react-router-dom";
import {useQueryClient } from "@tanstack/react-query"
import styles from './DetalleAnimal.module.scss';

const DetalleAnimal = () => {

  const queryClient = useQueryClient();
  const animales = queryClient.getQueryData(["animales"]);

  const { id } = useParams();

  const animal = animales.find((animal) => {
    return animal.id === Number(id);
  });

  const navigate = useNavigate();

  if (!animal) return <p> Animal no encontrado </p>;

  return (
   <section>
     <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Detalle del Animal</h1>
      <h2 className={styles.nombre}>{animal.nombre}</h2>
      <p>Especie: {animal.especie}</p>
      <p>Historia: {animal.historia}</p>
      <img src={animal.fotos[0]} alt={animal.especie} />

      <button className={styles.boton} onClick={() => navigate("/animales")}> Volver</button>
    </div>
   </section>
  );
};

export default DetalleAnimal;
