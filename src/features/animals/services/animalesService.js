import axios from "axios";
// IMPORTS DE IMÁGENES LOCALES DE ASSETS (Catálogo Real Completo)
// ==========================================================================

// 🐶 Perros
import dogImage1 from "../../../assets/jason-pofahl-3szw_YfFzK4-unsplash.jpg";
import dogImage2 from "../../../assets/rescatado.jpg";
import dogImage3 from "../../../assets/judy-beth-morris-nEPTC5FmPQo-unsplash.jpg";
import dogImage4 from "../../../assets/gustavo-sanchez-HelJwHKKvj0-unsplash.jpg";
import dogImage5 from "../../../assets/anastasiia-dudka-49Qof2WLef0-unsplash.jpg";

// 🐱 Gatos
import catImage1 from "../../../assets/gato-blanco-negro.jpg";
import catImage2 from "../../../assets/gato-blanco.jpg";
import catImage3 from "../../../assets/gato-gris.jpg";

// 🐇 Conejos
import rabbitImage1 from "../../../assets/conejo-blanco-marron.jpg";
import rabbitImage2 from "../../../assets/conejo-marron.jpg";
import rabbitImage3 from "../../../assets/conejo-blanco.jpg";

// 🐷 Cerdos / Chanchos
import pigImage1 from "../../../assets/cerdito-blanco.jpg";
import pigImage2 from "../../../assets/cerdito.jpg";
import pigImage3 from "../../../assets/cerdo-adulto.jpg";

// 🏠 Refugio y Equipo (Generales)
import generalImage1 from "../../../assets/refugio.jpg";
import generalImage2 from "../../../assets/equipo-rescataditdos.jpg";

// ==========================================================================
// DICCIONARIO DE IMÁGENES POR ESPECIE (Mapeo Letra por Letra)
// ==========================================================================
const animalImagesBySpecies = {
  perro: [dogImage1, dogImage2, dogImage3, dogImage4, dogImage5],
  gato: [catImage1, catImage2, catImage3],
  conejo: [rabbitImage1, rabbitImage2, rabbitImage3],
  chanchito: [pigImage1, pigImage2, pigImage3],
  general: [generalImage1, generalImage2],
};

const especiesPlaceholder = [
  "perro",
  "gato",
  "conejo",
  "chanchito",
  "perro",
  "chanchito",
  "conejo",
];
const mapearUserAAnimal = (user) => {
  const species = especiesPlaceholder[user.id % especiesPlaceholder.length];
  const history = `${user.name} fue rescatado y está esperando un hogar lleno de amor.`;

  const availablePhotos =
    animalImagesBySpecies[species] || animalImagesBySpecies.general;
  const photos = availablePhotos.slice(0, 3);

  return {
    id: user.id,
    name: user.name,
    species,
    history,
    photos,
  };
};

export const getAnimals = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  return response.data.map(mapearUserAAnimal);
};
