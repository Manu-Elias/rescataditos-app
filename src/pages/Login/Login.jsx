import { VALID_USER, VALID_PASSWORD } from "../../constants/auth";
import { saveSession } from "../../features/auth/services/authService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./styles/Login.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.userName === VALID_USER && data.userPassword === VALID_PASSWORD) {
      saveSession();
      navigate("/admin", { replace: true });
    } else {
      setError("root.invalidCredentials", {
        type: "manual",
        message: "Usuario o contraseña incorrecta",
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.loginForm}
        noValidate
      >
        <h2>Iniciar Sesión</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="user-name">Usuario</label>
          <input
            type="text"
            id="user-name"
            {...register("userName", {
              required: "Ingrese un nombre de Usuario",
            })}
            placeholder="Ingresá tu usuario"
          />
          {errors.userName && (
            <span className={styles.errorMessage} role="alert">
              {errors.userName.message}
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password-user">Contraseña</label>
          <input
            type="password"
            id="password-user"
            {...register("userPassword", {
              required: "Ingrese una contraseña",
            })}
            placeholder="Ingresá tu contraseña"
          />
          {errors.userPassword && (
            <span className={styles.errorMessage} role="alert">
              {errors.userPassword.message}
            </span>
          )}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Ingresar
        </button>

        {errors.root?.invalidCredentials && (
          <span className={styles.errorMessage} role="alert">
            {errors.root.invalidCredentials.message}
          </span>
        )}
      </form>
    </div>
  );
};
export default Login;
