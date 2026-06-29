
import { Link } from "react-router-dom";
import styles from './CardsAccion.module.scss'

const CardsAccion = ({ imagen, titulo, descripcion, link }) => {
 return( 
 
 <div className={styles.card}>
    <img className={styles.cardImagen} src={imagen} alt="" />
    <h3 className={styles.cardTitulo}>{titulo}</h3>
    <p className={styles.cardDescripcion}>{descripcion}</p>
    <Link className={styles.cardLink} to={link}>Ver mas --</Link>
  </div>);
};

export default CardsAccion;