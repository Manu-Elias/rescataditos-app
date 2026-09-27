import { useState, useEffect } from "react";
import styles from "./AnimalForm.module.scss";

const emptyForm = {
  name: "",
  species: "Perro",
  history: "",
  photos: "", // Guardamos el texto crudo en el estado local del input
};

const AnimalForm = ({ onCreateAnimal, animalToEdit, onEditAnimal }) => {
  const [form, setFormulario] = useState(emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const animalData = {
      ...form,
      photos: [form.photos],
    };

    if (animalToEdit) {
      onEditAnimal(animalData);
    } else {
      onCreateAnimal(animalData);
      setFormulario(emptyForm);
    }
  };

  useEffect(() => {
    if (animalToEdit) {
      setFormulario({
        ...animalToEdit,
        photos:
          animalToEdit.photos && animalToEdit.photos.length > 0
            ? animalToEdit.photos[0]
            : "",
      });
    } else {
      setFormulario(emptyForm);
    }
  }, [animalToEdit]);

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>
        {animalToEdit ? "Editar Ficha de Mascota" : "Registrar Nueva Mascota"}
      </h3>

      <form onSubmit={handleSubmit} className={styles.animalForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="name-animal">Nombre</label>
          <input
            type="text"
            id="name-animal"
            name="name"
            placeholder="Ej: Pimienta"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="species-animal">Especie</label>
          <div className={styles.selectWrapper}>
            <select
              id="species-animal"
              name="species"
              value={form.species}
              onChange={handleChange}
            >
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
              <option value="Cerdo">Cerdo</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        <div className={styles.inputGroupFull}>
          <label htmlFor="history-animal">Mi Historia </label>
          <textarea
            id="history-animal"
            name="history"
            placeholder="Contá un poco sobre su personalidad, de dónde viene o qué cuidados necesita..."
            value={form.history}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className={styles.inputGroupFull}>
          <label htmlFor="photos-animal">URL de la Foto</label>
          <input
            type="text"
            id="photos-animal"
            name="photos"
            placeholder="https://ejemplo.com"
            value={form.photos}
            onChange={handleChange}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="submit"
            className={animalToEdit ? styles.btnEditar : styles.btnCrear}
          >
            {animalToEdit ? "Guardar Cambios" : "Crear Mascota"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnimalForm;
