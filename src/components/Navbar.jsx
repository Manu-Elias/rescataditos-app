import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../assets/logo Nabvar Rescataditos.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Rescataditos" />
        Rescataditos ONG
      </div>
      <div className={styles.link}>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/animales">Animales</Link>
        <Link to="/adopcion">Adopción</Link>
        <Link to="/donaciones">Donaciones</Link>
      </div>
      <div className={styles.acciones}>
        <button>Quiero Adoptar</button>
      </div>
    </nav>
  );
};

export default Navbar;
