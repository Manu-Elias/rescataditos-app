import styles from "./AnimalCard.module.scss";


const AnimalCard = ({animal, children}) =>{
    return(
        <div className={styles.tarjeta}>
            <h2>{animal.nombre} </h2>
            <p>Especie: {animal.especie}</p>
            <p>Historia: {animal.historia}</p>
            <img src={animal.fotos[0]} alt={animal.especie} />
            {children}
        </div>
    )
}
export default AnimalCard;