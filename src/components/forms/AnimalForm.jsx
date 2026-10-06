import { useState, useEffect, useRef } from "react";
import styles from "./AnimalForm.module.scss";
import Swal from "sweetalert2"; // Importamos SweetAlert2 para controlar el límite de fotos de forma estética

const emptyForm = {
  name: "",
  species: "Perro",
  history: "",
  photos: [], // Inicializa como un array vacío listo para guardar múltiples imágenes locales
};

const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
};

const AnimalForm = ({ onCreateAnimal, animalToEdit, onEditAnimal }) => {
  const [form, setForm] = useState(emptyForm);
  const fileInputRef = useRef(null); // Control remoto para apuntar al input de archivos físico

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //  Abre  documentos, lee los archivos binarios y valida un máximo de 3 fotos
  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);

      // CONTROL DE MÁXIMO 3 FOTOS
      if (filesArray.length > 3) {
        Swal.fire({
          title: "¡Límite excedido!",
          text: "Podés seleccionar como máximo 3 fotos por cada rescatadito.",
          icon: "warning",
          confirmButtonText: "Entendido",
          buttonsStyling: false, // Apaga los estilos nativos y feos de SweetAlert
          customClass: {
            popup: styles.alertaPopup,
            title: styles.alertaTitulo,
            htmlContainer: styles.alertaContenido,
            confirmButton: styles.alertaBtnAlerta, // Clase SASS para el botón de aviso
          },
        });

        // Vaciamos el input físico de inmediato para que el usuario intente de nuevo
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }
      // CONVERSIÓN A BASE64 EN PARALELO CON MANEJO DE ERRORES
      try {
        const base64Promises = filesArray.map((file) =>
          convertFileToBase64(file),
        );
        const base64Urls = await Promise.all(base64Promises);

        setForm({
          ...form,
          photos: base64Urls, // Guardamos el array de imágenes  directamente en el estado
        });
      } catch (error) {
        console.error("Error al procesar las imagenes", error);

        Swal.fire({
          title: "¡Error al procesar!",
          text: "Hubo un problema al leer una o más fotos. Por favor, intentalo de nuevo.",
          icon: "error",
          confirmButtonText: "Entendido",
          buttonsStyling: false,
          customClass: {
            popup: styles.alertaPopup,
            title: styles.alertaTitulo,
            htmlContainer: styles.alertaContenido,
            confirmButton: styles.alertaBtnAlerta,
          },
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const animalData = {
      ...form,
      photos:
        form.photos.length > 0
          ? form.photos
          : [
              "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsZXMlMjBqdW50b3N8ZW58MHx8MHx8fDA%3D",
            ],
    };

    if (animalToEdit) {
      onEditAnimal(animalData);
    } else {
      onCreateAnimal(animalData);
      setForm(emptyForm);

      // Reseteamos el input del navegador físico de raíz al crear con éxito
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  useEffect(() => {
    if (animalToEdit) {
      // Si editamos, nos aseguramos de que photos siempre sea un array para que no rompa Swiper
      setForm({
        ...animalToEdit,
        photos: Array.isArray(animalToEdit.photos)
          ? animalToEdit.photos
          : animalToEdit.photos
            ? [animalToEdit.photos]
            : [],
      });
    } else {
      setForm(emptyForm);
      // Si cancelá o se sale de la edición, también limpiamos el input físico por seguridad
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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

        {/* Input de tipo archivo nativo, controlado y enlazado con la referencia de React */}
        <div className={styles.inputGroupFull}>
          <label htmlFor="photos-animal">Subir Fotos (Máximo 3)</label>
          <input
            type="file"
            id="photos-animal"
            name="photos"
            ref={fileInputRef} // Conectamos el control remoto aquí
            multiple // Permite arrastrar o seleccionar muchas fotos juntas con Ctrl o Shift
            accept="image/*" // Filtra tus archivos para mostrar solo imágenes (.jpg, .png, etc.)
            onChange={handleFileChange}
          />
          <small style={{ marginTop: "4px", display: "block" }}>
            Seleccioná hasta 3 fotos de tu computadora al mismo tiempo para
            activar su carrusel.
          </small>
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
