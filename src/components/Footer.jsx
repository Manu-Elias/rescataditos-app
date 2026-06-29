import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerColumns}>
        <section>
          <h3>Asociación Civil RESCATADITOS Personería Jurídica 767/15</h3>
          <p>Rescatando vidas y construyendo segundas oportunidades.</p>
        </section>
        <address>
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="tel:3426399535"> teléfono: 📞 3426 39-9535</a>
            </li>
            <li>
              <a href="">email: </a>
            </li>
            <li>
              dirección <a href=""></a>
            </li>
          </ul>
        </address>
        <section>
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/rescataditoss/?hl=es">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/rescataditos.silvia.e.pozzo">
                <FaFacebook/> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@ong.rescataditos"> <FaTiktok/> Tiktok</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@rescataditos4847"> <FaYoutube/> Youtube</a>
            </li>
          </ul>
        </section>
      </div>
      <small className={styles.footerCopyright}>
        © 2026 Rescataditos Todos los derechos reservados.
      </small>
    </footer>
  );
};

export default Footer;
