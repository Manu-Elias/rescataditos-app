import { useState,useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Animales from "../Animales";
import AnimalForm from "../../components/forms/AnimalForm";
import { getAnimals } from "../../services/animalesService";
import AnimalCard from "../../components/cards/AnimalCard/AnimalCard";



const AdminDashboard = ()=>{


   const [animales, setAnimales] = useState([]);

       const {data,isLoading} = useQuery({
      queryKey: ["animales"],
      queryFn: getAnimals
    });

const handleCrearAnimal = (datosFormulario)=>{
   const obtenerIdsAnimales = animales.map(animal => animal.id);
   const nuevoId = Math.max(...obtenerIdsAnimales) +1;
   const animalNuevo = { ...datosFormulario, id: nuevoId};
   const animalesActualizados = [...animales, animalNuevo];

   setAnimales(animalesActualizados);
   localStorage.setItem("animales", JSON.stringify(animalesActualizados));
}

const handleEliminarAnimal = (id) => {
  const animalesFiltrados = animales.filter(animal => animal.id !== id );
  setAnimales(animalesFiltrados);
  localStorage.setItem("animales", JSON.stringify(animalesFiltrados));
}

useEffect(() => {
  const datosGuardados = localStorage.getItem("animales"); // 1. Preguntar si ya hay algo
  
  if (!datosGuardados && !isLoading) { 

    // 2. Si NO hay nada guardado todavía...
    setAnimales(data);
    localStorage.setItem("animales", JSON.stringify(data));
    // (acá vendría: usar los datos de useQuery, y guardarlos con setItem)
  } else {
    // 3. Si YA hay algo guardado...
    
    // (acá vendría: leerlo con JSON.parse y usarlo)
    const animalesDelFichero = JSON.parse(datosGuardados);
    setAnimales(animalesDelFichero);
  }
}, [data,isLoading]);

    return(
        <>
        <h1>Panel de Administrador</h1>
        < AnimalForm onCrearAnimal={handleCrearAnimal}/>
        {
          animales.map((animal)=>(<AnimalCard animal={animal} key={animal.id}>
            <button onClick={()=> {handleEliminarAnimal(animal.id)}}>Eliminar</button>
          </AnimalCard>
             
             ))}
        </>
    );
}

export default AdminDashboard;