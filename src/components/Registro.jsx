import React, { useState, useCallback } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authFire } from "./firebase";
import { withRouter } from "react-router-dom";

const Registro = (props) => {
  const [errorFromFirebase, setErrorFromFirebase] = useState("");

  const numericRegex = /(?=.*[0-9])/;

  const sendUser = useCallback(
    async (email, password) => {
      console.log(email, password);
      setErrorFromFirebase("");
      try {
        const res = await authFire.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(res);
        localStorage.isAuthent = true;
        props.history.push("/app");
      } catch (e) {
        console.log(e);
        if (e.code === "auth/email-already-in-use") {
          setErrorFromFirebase(
            "El correo que intentas ingresar ya está registrado"
          );
        }
      }
    },
    [props.history]
  );

  return (
    <div className="custom-container mt-5 p-5">
      <h2 className="text-center">Regístrate en CrazyDolar</h2>
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
          }}
          onSubmit={(FormData) => {
            console.log(FormData);
            sendUser(FormData.email, FormData.password);
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .lowercase()
              .email("No es un email válido")
              .required("El email es obligatorio"),
            password: Yup.string()
              .required("La contraseña es obligatoria")
              .oneOf(
                [Yup.ref("repeatPassword")],
                "Las contraseñas no son iguales"
              )
              .min(8, "Se requieren al menos 8 caracteres")
              .matches(numericRegex, "Se requiere al menos un número"),
            repeatPassword: Yup.string()
              .required("La contraseña es obligatoria")
              .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
          })}
        >
          <Form className="d-flex flex-column align-items-center mt-4">
            {/* <Field name="uno" /> */}
            <span className="d-flex flex-column mb-2">
              <label>
                <i className="pi pi-user"></i> Email
              </label>
              <Field
                name="email"
                className="p-inputtext p-component input p-filled"
              />
              <ErrorMessage name="email">
                {(message) => (
                  <span className="error text-danger mt-1">{message}</span>
                )}
              </ErrorMessage>
              {errorFromFirebase && (
                <span className="error text-danger mt-1">
                  {errorFromFirebase}
                </span>
              )}
            </span>
            <span className="d-flex flex-column mb-2">
              <label>
                <i className="pi pi-lock"></i> Contraseña
              </label>
              <Field
                className="p-inputtext p-component p-filled p-password-input"
                name="password"
                placeholder="Mínimo 8 caracteres"
                type="password"
              />
              <ErrorMessage name="password">
                {(message) => (
                  <span className="error text-danger mt-1">{message}</span>
                )}
              </ErrorMessage>
            </span>
            <span className="d-flex flex-column mb-2">
              <label>
                <i className="pi pi-lock"></i> Repita la contraseña
              </label>
              <Field
                name="repeatPassword"
                className="p-inputtext p-component input p-filled"
                type="password"
              />

              <ErrorMessage name="repeatPassword">
                {(message) => (
                  <span className="error text-danger mt-1">{message}</span>
                )}
              </ErrorMessage>
            </span>
            <button type="submit" className="btn btn-dark btn-sm mt-2">
              Registrarse
            </button>
            {errorFromFirebase && (
              <button type="reset" className="btn btn-dark btn-sm mt-2">
                Limpiar datos
              </button>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default withRouter(Registro);
