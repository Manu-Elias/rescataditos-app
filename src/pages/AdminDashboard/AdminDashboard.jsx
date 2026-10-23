import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../features/auth/services/authService";
import AnimalForm from "../../components/forms/AnimalForm/AnimalForm";
import AnimalCard from "../../components/cards/AnimalCard/AnimalCard";
import useAnimalStore from "../../features/animals/store/useAnimalStore";
import styles from "./styles/AdminDashboard.module.scss";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const animals = useAnimalStore((state) => state.animals);
  const deleteAnimal = useAnimalStore((state) => state.deleteAnimal);
  const addAnimal = useAnimalStore((state) => state.addAnimal);
  const updateAnimal = useAnimalStore((state) => state.updateAnimal);
  const [editingAnimal, setEditingAnimal] = useState(null);

  // Función  para Cerrar Sesión con SweetAlert2
  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro de que querés cerrar sesión?",
      text: "Vas a tener que volver a ingresar tus credenciales para acceder.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
      reverseButtons: true, // Deja el botón de confirmar a la derecha
      buttonsStyling: false, // Apaga estilos nativos
      customClass: {
        popup: styles.alertPopup,
        title: styles.alertTitle,
        htmlContainer: styles.alertContent,
        confirmButton: styles.alertConfirmButton,
        cancelButton: styles.alertCancelButton,
      },
    }).then((result) => {
      // Si el usuario hace clic en "Sí, salir"
      if (result.isConfirmed) {
        clearSession();

        navigate("/", { replace: true });
      }
    });
  };

  const handleCreateAnimal = (formData) => {
    addAnimal(formData);
  };

  const handleDeleteAnimal = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,

      // Vinculamos las clases de SASS directamente
      customClass: {
        popup: styles.alertPopup,
        confirmButton: styles.alertConfirmButton,
        cancelButton: styles.alertCancelButton,
      },
      buttonsStyling: false, // Le dice a SweetAlert que no use sus estilos por defecto en los botones
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAnimal(id);
      }
    });
  };

  const handleEditAnimal = (id) => {
    const foundAnimal = animals.find((animal) => animal.id === id);
    setEditingAnimal(foundAnimal);
  };

  const handleSaveEdit = (modifiedAnimal) => {
    updateAnimal(modifiedAnimal);
    setEditingAnimal(null);
  };

  return (
    <div className={styles.dashboardWrapper}>
      {/* Nuevo Menú Superior de Navegación */}
      <nav className={styles.adminNavbar}>
        <div className={styles.navbarBrand}>
          <span>🐾 Panel Control</span>
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </nav>

      <div className={styles.dashboardContainer}>
        <h1 className={styles.dashboardTitle}>Gestión de Mascotas</h1>

        <div className={styles.formSection}>
          <AnimalForm
            onCreateAnimal={handleCreateAnimal}
            animalToEdit={editingAnimal}
            onEditAnimal={handleSaveEdit}
          />
        </div>

        <div className={styles.gridContainer}>
          {animals.map((animal) => (
            <AnimalCard animal={animal} key={animal.id}>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.secondaryButton}
                  onClick={() => {
                    handleEditAnimal(animal.id);
                  }}
                >
                  Editar Animal
                </button>
                <button
                  className={styles.dangerButton}
                  onClick={() => {
                    handleDeleteAnimal(animal.id);
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
