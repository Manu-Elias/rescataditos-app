import { useParams, useNavigate } from "react-router-dom";
import useAnimalStore from "../store/useAnimalStore";
import Swal from "sweetalert2";
import styles from "./DetalleAnimal.module.scss";

const DetalleAnimal = () => {
  const animals = useAnimalStore((state) => state.animals);
  const { id } = useParams();
  const navigate = useNavigate();

  const animal = animals.find((animal) => animal.id === Number(id));

  if (!animal) {
    return (
      <div className={styles.errorContainer}>
        <p> No pudimos encontrar a esta mascota en nuestro radar.</p>
        <button
          className={styles.botonVolver}
          onClick={() => navigate("/animales")}
        >
          Volver al listado
        </button>
      </div>
    );
  }

  const urlFoto = Array.isArray(animal.fotos) ? animal.fotos : animal.fotos;

  // Función para manejar el clic de adopción de forma limpia
  const handleAdoptarClick = () => {
    Swal.fire({
      title: "¡Excelente decisión! 🐾",
      html: `Estamos muy felices de que quieras darle un hogar a <strong>${animal.nombre}</strong>.<br><br>En breve un miembro de nuestro equipo se pondrá en contacto con vos para iniciar el proceso de adopción.`,
      icon: "success",
      confirmButtonText: "¡Esperaré con ansias!",
      buttonsStyling: false, // Apaga los estilos nativos de SweetAlert para los botones
      customClass: {
        popup: styles.alertaPopup,
        title: styles.alertaTitulo,
        htmlContainer: styles.alertaContenido,
        confirmButton: styles.alertaBtnConfirmar,
      },
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.headerNavegacion}>
        <button
          className={styles.btnAtras}
          onClick={() => navigate("/animales")}
        >
          ← Volver a buscar amigos
        </button>
      </header>

      <main className={styles.heroContainer}>
        <div className={styles.seccionImagen}>
          <img
            src={urlFoto || "https://unsplash.com"}
            alt={`Foto de ${animal.nombre}`}
          />
          <div className={styles.badgeEspecie}>{animal.especie}</div>
        </div>

        <div className={styles.seccionContenido}>
          <div className={styles.encabezado}>
            <span className={styles.subtitulo}>
              Conocé a tu próximo compañero
            </span>
            <h1 className={styles.nombreAnimal}>{animal.nombre}</h1>
          </div>

          <div className={styles.historiaCard}>
            <h3>Un pedacito de mi historia</h3>
            <p className={styles.textoHistoria}>{animal.historia}</p>
          </div>

          <div className={styles.llamadoAccion}>
            <p>¿Sentís que {animal.nombre} podría ser parte de tu familia?</p>
            <button className={styles.btnAdoptar} onClick={handleAdoptarClick}>
              🐾 Quiero Adoptar a {animal.nombre}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetalleAnimal;
