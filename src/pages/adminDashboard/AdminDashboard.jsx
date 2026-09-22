import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Animales from "../Animales";
import AnimalForm from "../../components/forms/AnimalForm";
import { getAnimals } from "../../services/animalesService";
import AnimalCard from "../../components/cards/AnimalCard/AnimalCard";
import { useNavigate } from "react-router-dom";
import styles from "./AdminDashboard.module.scss";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [animales, setAnimales] = useState([]);
  const [animalEnEdicion, setAnimalEnEdicion] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["animales"],
    queryFn: getAnimals,
  });

  // Función  para Cerrar Sesión con SweetAlert2
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    Swal.fire({
      title: "¡Sesión Cerrada!",
      text: "Saliste del panel de administración correctamente.",
      icon: "success",
      confirmButtonText: "Entendido",
      buttonsStyling: false, // Apaga estilos nativos
      customClass: {
        popup: styles.alertaPopup,
        title: styles.alertaTitulo,
        htmlContainer: styles.alertaContenido,
        confirmButton: styles.alertaBtnExito,
      },
    }).then(() => {
      // removemos el item de autenticación
      localStorage.removeItem("isLoggedIn");

      // Redirigimos al login
      navigate("/");

      //  despachar un evento de almacenamiento para que React se entere al instante:
      window.dispatchEvent(new Event("storage"));
    });
  };

  const handleCrearAnimal = (datosFormulario) => {
    const obtenerIdsAnimales = animales.map((animal) => animal.id);
    const nuevoId = Math.max(...obtenerIdsAnimales) + 1;
    const animalNuevo = { ...datosFormulario, id: nuevoId };
    const animalesActualizados = [...animales, animalNuevo];

    setAnimales(animalesActualizados);
    localStorage.setItem("animales", JSON.stringify(animalesActualizados));
  };

  const handleEliminarAnimal = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,

      // Vinculamos las clases de tu módulo de SASS directamente
      customClass: {
        popup: styles.alertaPopup,
        confirmButton: styles.alertaBtnConfirmar,
        cancelButton: styles.alertaBtnCancelar,
      },
      buttonsStyling: false, // Le dice a SweetAlert que no use sus estilos por defecto en los botones
    }).then((result) => {
      if (result.isConfirmed) {
        const animalesFiltrados = animales.filter((animal) => animal.id !== id);
        setAnimales(animalesFiltrados);
        localStorage.setItem("animales", JSON.stringify(animalesFiltrados));
      }
    });
  };

  const handleEditarAnimal = (id) => {
    const animalEncontrado = animales.find((animal) => animal.id === id);
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
    <div className={styles.dashboardWrapper}>
      {/* Nuevo Menú Superior de Navegación */}
      <nav className={styles.adminNavbar}>
        <div className={styles.navbarBrand}>
          <span>🐾 Panel Control</span>
        </div>
        <button className={styles.botonSalir} onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </nav>

      <div className={styles.dashboardContainer}>
        <h1 className={styles.dashboardTitle}>Gestión de Mascotas</h1>

        <div className={styles.formSection}>
          <AnimalForm
            onCrearAnimal={handleCrearAnimal}
            animalAEditar={animalEnEdicion}
            onEditarAnimal={handleGuardarEdicion}
          />
        </div>

        <div className={styles.gridContainer}>
          {animales.map((animal) => (
            <AnimalCard animal={animal} key={animal.id}>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.botonSecundario}
                  onClick={() => {
                    handleEditarAnimal(animal.id);
                  }}
                >
                  Editar Animal
                </button>
                <button
                  className={styles.botonPeligro}
                  onClick={() => {
                    handleEliminarAnimal(animal.id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </AnimalCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
