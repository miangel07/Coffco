import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Modal from "../components/Modal";
import Api from "../components/Api";

const AdministrarUsurioPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [modal, setModal] = useState(null);

  //con esto se refresca la pagina por si sola

  const editarUsuarios = (id_usuario) => {
    setModal(id_usuario);
  };
  const ListarUsuarios = async () => {
    try {
      const response = await Api.get("http://localhost:3000/usuario/listar");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error.data.message);
    }
  };
  useEffect(() => {
    ListarUsuarios()
    editarUsuarios()
  }, []);

  const eliminarUsuario = async (id_usuario) => {
    try {
      const responde = await Api.delete(
        `http://localhost:3000/usuario/eliminar/${id_usuario}`
      );
      alert(responde.data.message);
      ListarUsuarios();
    } catch (error) {
      console.log(
        error.response.data.message || error.message || error.toString()
      );
    }
  };

  return (
    <>
      <main className="h-[calc(100vh-120px)] w-full absolute top-14">
        <section
          id="content"
          className="w-[100wh-60px] lg:w-[100wh-250px] ml-[60px] lg:ml-[240px] p-5 right-0 transition-all duration-500 ease-in-out"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-slate-50 p-5 m-2 rounded-md flex justify-between items-center shadow">
              <div>
                <h3 className="font-bold">Total Administradores</h3>
                <p className="text-gray-500"></p>
              </div>
              <i className="fa-solid fa-users p-4 bg-gray-200 rounded-md"></i>
            </div>

            <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
              <div>
                <h3 className="font-bold">Total de Encargados</h3>
                <p className="text-gray-500">6</p>
              </div>
              <i className="fa-solid fa-users p-4 bg-green-200 rounded-md"></i>
            </div>

            <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
              <div>
                <h3 className="font-bold">Total de Invitado</h3>
                <p className="text-gray-500">6</p>
              </div>
              <i className="fa-solid fa-users p-4 bg-yellow-200 rounded-md"></i>
            </div>
            <div className="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
              <div>
                <h3 className="font-bold">Total de Todos Los usuarios</h3>
                <p className="text-gray-500">14</p>
              </div>
              <i className="fa-solid fa-users p-4 bg-yellow-200 rounded-md"></i>
            </div>
          </div>

          <div className="grid">
          
            <div>
              <span
                onClick={() =>
                  document.getElementById("authentication-modal").showModal()
                }
                className="btn mb-2 bg-green-500"
              >
                Nuevo
                <dialog
                  id="authentication-modal"
                  className="modal"
                >
                  <div className="modal-box">
                    <Modal />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                  
                    <button> Close</button>
                  </form>
                </dialog>
              </span>
            </div>

            <div className="overflow-x-auto mb-7  shadow-md">
              <table className="w-full table-fixed">
                <thead className="bg-gray-100 rounded-sm ">
                  <tr className=" gap-4 grid-cols-2">
                    <th className="text-center">Id </th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Apellido </th>
                    <th className="text-center">Correo </th>
                    <th className="text-center">Telefono</th>
                    <th className="text-center">Indentificacion</th>
                    <th className="text-center">Tipo De documento</th>
                    <th className="text-center">Rol</th>
                    
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>

                <tbody >
                  
                  {usuarios.map((usuarios) => (
                    <tr className=" gap-4 grid-cols-2" key={usuarios.id_usuario}>
                    
                      <td className="text-center">{usuarios.id_usuario}</td>
                      <td className="text-center">{usuarios.nombre_usuario}</td>
                      <td className="text-center">{usuarios.apellido_usuario}</td>
                      <td className="text-center">{usuarios.correo_electronico}</td>
                      <td className="text-center">{usuarios.telefono_usuario}</td>
                      <td className="text-center">{usuarios.numero_identificacion}</td>
                      <td className="text-center">{usuarios.tipo_documento}</td>
                      <td className="text-center">{usuarios.rol_usuario}</td>
                    
                      <td className="flex justify-center">
                        <div className="flex flex-row gap-4 grid-cols-2 mb-2 mt-3">
                            <span
                            >
                                <RiDeleteBinLine className="fas fa-icon text-xl cursor-pointer"
                                  onClick={() =>{eliminarUsuario(usuarios.id_usuario)} }
                                />
                            </span>

                          <span
                           
                            onClick={() =>
                              document.getElementById("my_modal_2").showModal()
                            }
                          >
                        <TiEdit  className="fas fa-icon text-xl cursor-pointer" onClick={()=>{editarUsuarios(usuarios.id_usuario)}}/>
                          </span>
                          <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>

                              <Modal id_usuario={modal} />
                            </div>
                          </dialog>
                        </div>
                      </td>
                     
                    </tr>
                   
                  ))}
                      
                  <tr>
                    <td>
                      <div className="flex justify-between gap-1">
                        <i
                          title="Edit"
                          className="fa-solid fa-pencil p-1 text-green-500 rounded-full cursor-pointer"
                        ></i>
                        <i
                          title="View"
                          className="fa-solid fa-eye p-1 text-violet-500 rounded-full cursor-pointer"
                        ></i>
                        <i
                          title="Delete"
                          className="fa-solid fa-trash p-1 text-red-500 rounded-full cursor-pointer"
                        ></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="m-2 lg:col-span-1 shadow-md">
              <h2 className="text-xl p-2">Pie Chart</h2>
              <div id="pie_chart" className="w-full"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default AdministrarUsurioPage;
