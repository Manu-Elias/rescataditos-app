import { useState } from "react";
import { VALID_USER, VALID_PASSWORD } from "../../constants/auth";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [userName, setUserName] = useState("");
    const [userPassword , setUserPassword] = useState ("");
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e)=>{ e.preventDefault();
        if (userName === VALID_USER && userPassword === VALID_PASSWORD) {
            localStorage.setItem("isLoggedIn", "true")
            navigate("/admin")
        } else {
            setError(true);
           
        }
    }

    return(
          <form onSubmit={handleSubmit}>
            <label>Usuario:</label>
            <input type="text"  value={userName} onChange={(e)=>setUserName(e.target.value)}/>

            <label>Contraseña:</label>
            <input type="password" value={userPassword}  onChange={(e)=> setUserPassword(e.target.value)}/>

            <button type="submit"  >Ingresar</button>
            {error &&  <p>Usuario o contraseña Incorrecta </p>}
        </form>
    );
}
export default Login;