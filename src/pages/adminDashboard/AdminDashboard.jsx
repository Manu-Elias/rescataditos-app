import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Animales from "../Animales";
import AnimalForm from "../../components/forms/AnimalForm";
import { getAnimals } from "../../services/animalesService";
import AnimalCard from "../../components/cards/AnimalCard/AnimalCard";

const AdminDashboard = () => {
  const [animales, setAnimales] = useState([]);
  const [animalEnEdicion, setAnimalEnEdicion] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["animales"],
    queryFn: getAnimals
  });

  const handleCrearAnimal = (datosFormulario) => {
    const obtenerIdsAnimales = animales.map(animal => animal.id);
    const nuevoId = Math.max(...obtenerIdsAnimales) + 1;
    const animalNuevo = { ...datosFormulario, id: nuevoId };
    const animalesActualizados = [...animales, animalNuevo];

    setAnimales(animalesActualizados);
    localStorage.setItem("animales", JSON.stringify(animalesActualizados));
  };

  const handleEliminarAnimal = (id) => {
    const respuestaAdmin = window.confirm("¿Estás seguro de que querés eliminar a esta mascota?");
    if (respuestaAdmin) {
      const animalesFiltrados = animales.filter(animal => animal.id !== id);
      setAnimales(animalesFiltrados);
      localStorage.setItem("animales", JSON.stringify(animalesFiltrados));
    }
  };

  const handleEditarAnimal = (id) => {
    const animalEncontrado = animales.find(animal => animal.id === id);
    setAnimalEnEdicion(animalEncontrado);
  };

  const handleGuardarEdicion = (animalModificado) => {
    
    const animalesActualizados = animales.map((animal) => {
      if (animal.id === animalModificado.id) {
        return animalModificado;
      } else {
        return animal;
      }
    });

    setAnimales(animalesActualizados);
    localStorage.setItem("animales", JSON.stringify(animalesActualizados));
    setAnimalEnEdicion(null);
  };

  
  useEffect(() => {
    const datosGuardados = localStorage.getItem("animales");
    
    if (!datosGuardados && !isLoading) { 
      setAnimales(data);
      localStorage.setItem("animales", JSON.stringify(data));
    } else if (datosGuardados) { 
      const animalesDelFichero = JSON.parse(datosGuardados);
      setAnimales(animalesDelFichero);
    }
  }, [data, isLoading]);

  return (
    <>
      <h1>Panel de Administrador</h1>
      <AnimalForm 
        onCrearAnimal={handleCrearAnimal} 
        animalAEditar={animalEnEdicion} 
        onEditarAnimal={handleGuardarEdicion}
      />
      {animales.map((animal) => (
        <AnimalCard animal={animal} key={animal.id}>
          <button onClick={() => { handleEliminarAnimal(animal.id) }}>Eliminar</button>
          <button onClick={() => { handleEditarAnimal(animal.id) }}>Editar Animal</button>
        </AnimalCard>
      ))}
    </>
  );
};

export default AdminDashboard;
