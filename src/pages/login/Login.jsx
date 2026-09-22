import { useState } from "react";
import { VALID_USER, VALID_PASSWORD } from "../../constants/auth";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === VALID_USER && userPassword === VALID_PASSWORD) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Iniciar Sesión</h2>

        <div className={styles.inputGroup}>
          <label>Usuario</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Ingresá tu usuario"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Contraseña</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Ingresá tu contraseña"
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Ingresar
        </button>

        {error && (
          <p className={styles.errorMessage}>Usuario o contraseña incorrecta</p>
        )}
      </form>
    </div>
  );
};
export default Login;
