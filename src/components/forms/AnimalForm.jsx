import { useState, useEffect } from "react";
import styles from "./AnimalForm.module.scss";

const formularioVacio = {
  nombre: "",
  especie: "Perro",
  historia: "",
  fotos: "",
};

const AnimalForm = ({ onCrearAnimal, animalAEditar, onEditarAnimal }) => {
  const [formulario, setFormulario] = useState(formularioVacio);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animalAEditar) {
      onEditarAnimal(formulario);
    } else {
      onCrearAnimal(formulario);
      setFormulario(formularioVacio);
    }
  };

  useEffect(() => {
    if (animalAEditar) {
      setFormulario(animalAEditar);
    } else {
      setFormulario(formularioVacio);
    }
  }, [animalAEditar]);

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>
        {animalAEditar ? "Editar Ficha de Mascota" : "Registrar Nueva Mascota"}
      </h3>

      <form onSubmit={handleSubmit} className={styles.animalForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="nombre-animal">Nombre</label>
          <input
            type="text"
            id="nombre-animal"
            name="nombre"
            placeholder="Ej: Pimienta"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="especie-animal">Especie</label>
          <div className={styles.selectWrapper}>
            <select
              id="especie-animal"
              name="especie"
              value={formulario.especie}
              onChange={handleChange}
            >
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo"> Conejo</option>
              <option value="Cerdo">Cerdo</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        <div className={styles.inputGroupFull}>
          <label htmlFor="historia-animal">Mi Historia</label>
          <textarea
            id="historia-animal"
            name="historia"
            placeholder="Contá un poco sobre su personalidad, de dónde viene o qué cuidados necesita..."
            value={formulario.historia}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className={styles.inputGroupFull}>
          <label htmlFor="fotos-animal">URL de la Foto</label>
          <input
            type="text"
            id="fotos-animal"
            name="fotos"
            placeholder="https://ejemplo.com"
            value={formulario.fotos}
            onChange={handleChange}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="submit"
            className={animalAEditar ? styles.btnEditar : styles.btnCrear}
          >
            {animalAEditar ? "Guardar Cambios" : "Crear Mascota"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnimalForm;
