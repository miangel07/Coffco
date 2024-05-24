import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
/* import escuela from "../assets/escuela.jpg"; */
/* import escudo from "../assets/escudo.png"; */
import Api from "./Api";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await Api.post("/login", {
        numero_identificacion: data.userDoc,
        contraseña_usuario: data.contraseña,
      });
      if (response.status === 200) {
        console.log("Login successful", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/administarusuario");
      } else {
        setErrorMessage(
          response.data.message || "Error en el inicio de sesión"
        );
      }
    } catch (error) {
      console.error("Error during login", error);
      setErrorMessage(
        error.response.data.message || "Error en el inicio de sesión"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow">
        <div className="w-1/2 flex justify-center items-center bg-gray-100">
          <div className="card w-full max-w-md shadow-lg rounded-md bg-white bg-opacity-90 p-8">
            <h1 className="text-3xl font-semibold text-gray-800 text-center">
              COFFCO
            </h1>
            <h2 className="text-lg font-medium text-gray-800 text-center mb-4">
              coffee control
            </h2>
            {errorMessage && (
              <div className="text-red-500 text-center mb-4">
                {errorMessage}
              </div>
            )}
            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text" style={{ color: "#586E26" }}>
                    Número de documento
                  </span>
                </label>
                <input
                  style={{ backgroundColor: "#B1C483" }}
                  type="text"
                  name="userDoc"
                  placeholder="Número de documento"
                  className="input input-bordered"
                  {...register("userDoc", {
                    required: "Número de documento es requerido",
                  })}
                />
                {errors.userDoc && (
                  <p className="text-red-500">{errors.userDoc.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text" style={{ color: "#586E26" }}>
                    Contraseña
                  </span>
                </label>
                <input
                  style={{ backgroundColor: "#B1C483" }}
                  type="password"
                  name="contraseña"
                  placeholder="Contraseña"
                  className="input input-bordered"
                  {...register("contraseña", {
                    required: "Contraseña es requerida",
                  })}
                />
                {errors.contraseña && (
                  <p className="text-red-500">{errors.contraseña.message}</p>
                )}
                <label className="label">
                  <Link   to="/registro" >
                 
                  <a
                  
                    className="label-text-alt link link-hover"
                    style={{ color: "#586E26" }}
                  >
                    Registrarse
                  </a>
                  </Link>
                 
                  <a
                    href="#"
                    className="label-text-alt link link-hover"
                    style={{ color: "#586E26" }}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                 
                </label>
              </div>
              <div className="form-control mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#586E26",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
   {/*      <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent"></div>
          <img
            src={escudo}
            alt="escudo"
            className="absolute top-4 right-4 w-20"
          />
          <img
            src={escuela}
            alt="escuela"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default LoginComponent;
