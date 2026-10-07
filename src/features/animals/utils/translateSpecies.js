const speciesLabels = {
  dog: "Perro",
  cat: "Gato",
  rabbit: "Conejo",
  pig: "Cerdo",
};

export const translateSpecies = (species) => {
  if (!species) return "Otro";
  return (
    speciesLabels[species] || species.charAt(0).toUpperCase() + species.slice(1)
  );
};
