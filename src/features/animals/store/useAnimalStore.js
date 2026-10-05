import { create } from "zustand";
const useAnimalStore = create((set) => ({
  animals: [],

  setAnimals: (newAnimals) => set({ animals: newAnimals }),

  addAnimal: (newAnimal) =>
    set((state) => {
      const nextId =
        state.animals.length > 0
          ? Math.max(...state.animals.map((animal) => animal.id)) + 1
          : 1;

      const updated = [...state.animals, { ...newAnimal, id: nextId }];

      localStorage.setItem("animals", JSON.stringify(updated));

      return { animals: updated };
    }),

  updateAnimal: (updatedAnimal) =>
    set((state) => {
      const updated = state.animals.map((animal) =>
        animal.id === updatedAnimal.id ? updatedAnimal : animal,
      );

      localStorage.setItem("animals", JSON.stringify(updated));

      return { animals: updated };
    }),

  deleteAnimal: (id) =>
    set((state) => {
      const updated = state.animals.filter((animal) => animal.id !== id);
      localStorage.setItem("animals", JSON.stringify(updated));
      return { animals: updated };
    }),
}));

export default useAnimalStore;
