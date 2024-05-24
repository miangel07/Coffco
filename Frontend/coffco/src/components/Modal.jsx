import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Api from "../components/Api";

const Modal = ({ id_usuario }) => {
  const [values, setValues] = useState({
    id_usuario: 0,
    nombre_usuario: "",
    apellido_usuario: "",
    correo_electronico: "",
    telefono_usuario: "",
    rol_usuario: "",
    contraseña_usuario: "",
    numero_identificacion: "",
    tipo_documento: "",
  });

  useEffect(() => {
    const listar = async () => {
      try {
        if (id_usuario) {
          const response = await Api.get(
            `http://localhost:3000/usuario/listarId/${id_usuario}`
          );
          setValues(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    listar();
  }, [id_usuario]);

  const estadoInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const formulario = async (event) => {
    event.preventDefault();
    try {
      if (values.id_usuario === 0) {
        document.getElementById("div-password");
        // Crear nuevo usuario
        const response = await Api({
          method: "POST",
          url: "http://localhost:3000/usuario/registrar",
          data: values,
        });
        window.location.reload();
        alert(response.data.message);
      } else {
        // Actualizar usuario existente
        try {
          const response = await Api.put(
            `http://localhost:3000/usuario/actualizar/${id_usuario}`,
            values
          );
          window.location.reload();
          setValues(response.data);
          alert(response.data.message);
        } catch (error) {
          console.error(error);
        }
      }
      /* 
      setValues({
        id_usuario: "",
        nombre_usuario: "",
        apellido_usuario: "",
        correo_electronico: "",
        telefono_usuario: "",
        rol_usuario: "",
        contraseña_usuario: "",
        numero_identificacion: "",
        tipo_documento: "",
      }); */
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al procesar el formulario.");
    }
  };

  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className=" justify-center items-center"
      >
        <form className="card-body" onSubmit={formulario}>
          <div className="form-control">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Nombre
              </span>
            </label>
            <input
              style={{ backgroundColor: "#B1C483" }}
              type="text"
              name="nombre_usuario"
              placeholder="Nombre"
              className="input input-bordered"
              value={values.nombre_usuario}
              onChange={estadoInput}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Apellido
              </span>
            </label>
            <input
              style={{ backgroundColor: "#B1C483" }}
              type="text"
              name="apellido_usuario"
              placeholder="Apellido"
              className="input input-bordered"
              value={values.apellido_usuario}
              onChange={estadoInput}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Correo Electronico
              </span>
            </label>
            <input
              style={{ backgroundColor: "#B1C483" }}
              type="text"
              name="correo_electronico"
              placeholder="Correo Electronico"
              className="input input-bordered"
              value={values.correo_electronico}
              onChange={estadoInput}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Telefono
              </span>
            </label>
            <input
              style={{ backgroundColor: "#B1C483" }}
              type="text"
              name="telefono_usuario"
              placeholder="Telefono"
              className="input input-bordered"
              value={values.telefono_usuario}
              onChange={estadoInput}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Rol
              </span>
            </label>
            <select
              name="rol_usuario"
              value={values.rol_usuario}
              onChange={estadoInput}
            >
              <option>Seleccione Un rol</option>
              <option value="encargado">Encargado</option>
              <option value="administrador">Administrador</option>
              <option value="invitado">Inivitado</option>
            </select>
          </div>

          <div className="form-control " id="div-password">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Contraseña
              </span>
            </label>
            <input
              style={{ backgroundColor: "#B1C483" }}
              type="password"
              name="contraseña_usuario"
              placeholder="Contraseña"
              className="input input-bordered"
              value={values.contraseña_usuario}
              onChange={estadoInput}
            />
            <label className="label"></label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Numero de Identificacion
              </span>
            </label>
            <input
              type="number"
              name="numero_identificacion"
              className="input input-bordered"
              value={values.numero_identificacion}
              onChange={estadoInput}
            />
            <label className="label"></label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text" style={{ color: "#586E26" }}>
                Tipo de documento
              </span>
            </label>
            <select
              name="tipo_documento"
              value={values.tipo_documento}
              onChange={estadoInput}
            >
              <option>seleccione tipo de documento</option>
              <option value="cc">cc</option>
              <option value="ti">ti</option>
              <option value="nit">nit</option>
              <option value="pasaporte">pasaporte</option>
            </select>
            <label className="label"></label>
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
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
