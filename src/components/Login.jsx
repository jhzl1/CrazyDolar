import React, { useCallback, useState } from "react";
import { authFire } from "./firebase";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { withRouter } from "react-router-dom";
import useAuth from "./auth/useAuth";

const Login = (props) => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();

  const login = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await authFire.signInWithEmailAndPassword(
          emailLogin,
          passwordLogin
        );
        setEmailLogin("");
        setPasswordLogin("");
        setError("");
        console.log(res);
        auth.login(res.user.uid);
        props.history.push("/app");
      } catch (e) {
        if (e.code === "auth/user-not-found") {
          setError("El correo que estás ingresando no se encuentra registrado");
        }
        if (e.code === "auth/wrong-password") {
          setError("La contraseña colocada no es correcta");
        }
        if (e.code === "auth/invalid-email") {
          setError("Email inválido");
        }
      }
    },
    [passwordLogin, emailLogin, props.history, auth]
  );

  return (
    <div className="custom-container mt-5 p-5 d-flex flex-column align-items-center">
      <h2 className="text-center">Inicia sesión </h2>

      <form
        className="d-flex flex-column align-items-center mt-4"
        onSubmit={login}
      >
        <InputText
          className="input mb-2"
          placeholder="Ingresa tu correo"
          onChange={(e) => setEmailLogin(e.target.value)}
          value={emailLogin}
        />
        {error && (
          <span className="error align-self-start text-danger mb-1">
            {error}
          </span>
        )}
        <Password
          toggleMask
          className="mb-2"
          placeholder="Ingresa tu contraseña"
          feedback={false}
          onChange={(e) => setPasswordLogin(e.target.value)}
          value={passwordLogin}
        />

        <button className="btn btn-dark" type="submit">
          Iniciar sesión
        </button>
      </form>

      <Divider align="center" type="dashed">
        <b>O</b>
      </Divider>
      <button className="btn btn-warning btn-sm">
        ¿Has olvidado tu contraseña?
      </button>
    </div>
  );
};

export default withRouter(Login);
