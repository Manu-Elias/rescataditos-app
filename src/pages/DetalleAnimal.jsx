import { useParams, useNavigate } from "react-router-dom";
import useAnimalStore from "../features/animals/store/useAnimalStore";
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

  const urlPhoto = Array.isArray(animal.photos)
    ? animal.photos[0]
    : animal.photos;

  // Función para manejar el clic de adopción de forma limpia
  const handleAdoptarClick = () => {
    Swal.fire({
      title: "¡Excelente decisión! 🐾",
      html: `Estamos muy felices de que quieras darle un hogar a <strong>${animal.name}</strong>.<br><br>En breve un miembro de nuestro equipo se pondrá en contacto con vos para iniciar el proceso de adopción.`,
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
            src={
              urlPhoto ||
              "https://media.istockphoto.com/id/2266531995/photo/black-dog-and-cat-silhouette-pet-companion-icon-illustration.jpg?s=2048x2048&w=is&k=20&c=zLCWi8y3cQXK7CK8tfblhpBQlNYrh6jYdTp6iPG031E="
            }
            alt={`Foto de ${animal.name}`}
          />
          <div className={styles.badgeEspecie}>{animal.species}</div>
        </div>

        <div className={styles.seccionContenido}>
          <div className={styles.encabezado}>
            <span className={styles.subtitulo}>
              Conocé a tu próximo compañero
            </span>
            <h1 className={styles.nombreAnimal}>{animal.name}</h1>
          </div>

          <div className={styles.historiaCard}>
            <h3>Un pedacito de mi historia</h3>
            <p className={styles.textoHistoria}>{animal.history}</p>
          </div>

          <div className={styles.llamadoAccion}>
            <p>¿Sentís que {animal.name} podría ser parte de tu familia?</p>
            <button className={styles.btnAdoptar} onClick={handleAdoptarClick}>
              🐾 Quiero Adoptar a {animal.name}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetalleAnimal;
