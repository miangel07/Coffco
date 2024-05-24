  import React, { useEffect } from "react";
import Api from "./Api";
import { useParams,useNavigate} from "react-router-dom";
import { useState } from "react";

const EditarUsuario = () => {
    const {id_usuario}=useParams();

    const [usuario,setUsuarios]= useState({nombre_usuario:"",apellido_usuario:"",correo_electronico:"",
        telefono_usuario:"",numero_identificacion:"",tipo_documento:"",rol_usuario:"",contraseña_usuario:""})
    const navigate=useNavigate()
    useEffect(()=>{
        const obtenerUsuario=async ()=>{
            try {
                const response=await Api.get(`http://localhost:3000/usuario/listarid/${id_usuario}`)
                setUsuarios(...response.data)
            } catch (error) {
                console.log(error.response.data.message || error.message || error.toString());
            }
        }
        obtenerUsuario()
    },[id_usuario])
    const actualizarUsuario=async(id_usuario)=>{
       
        try {
            await Api.put(`http://localhost:3000/usuario/actualizar/${id_usuario}`,usuario).finally(()=>{
                window.location.reload()
                navigate("/administarusuario")
            })

        } catch (error) {
            console.log(error.response.data.message || error.message || error.toString());
        }
    }
    return (
            <>
          <div id="editar" tabIndex="-1" aria-hidden="true" className=" justify-center items-center">
            
          <form className="card-body" >
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>Nombre</span>
                            </label>
                            <input style={{ backgroundColor: '#B1C483'}} type="text" name="nombre_usuario" placeholder="Nombre" className="input input-bordered" 
                               value={usuario.nombre_usuario}
                               onChange={e => setUsuarios({...usuario,nombre_usuario:e.target.value})}/>
                              
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>hola</span>
                            </label>
                            <input style={{ backgroundColor: '#B1C483'}} type="text" name="apellido_usuario" placeholder="Apellido" className="input input-bordered"
                            value={usuario.apellido_usuario}
                            onChange={(e) => setUsuarios({...usuario,apellido_usuario:e.target.value})}  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>Correo Electronico</span>
                            </label>
                            <input style={{ backgroundColor: '#B1C483'}} type="text" name="correo_electronico" placeholder="Correo Electronico" className="input input-bordered"
                             value={usuario.correo_electronico}
                             onChange={(e) => setUsuarios({...usuario,correo_electronico:e.target.value})}  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>Telefono</span>
                            </label>
                            <input style={{ backgroundColor: '#B1C483'}} type="text" name="telefono_usuario" placeholder="Telefono" className="input input-bordered"
                             value={usuario.telefono_usuario}
                             onChange={(e) => setUsuarios({...usuario,telefono_usuario:e.target.value})}  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>Rol</span>
                            </label>
                          <select name="rol_usuario"  value={usuario.rol_usuario}
                  onChange={(e) => setUsuarios({...usuario,rol_usuario:e.target.value})}>
                            <option  >Seleccione Un rol</option>
                            <option value="encargado">Encargado</option>
                            <option value="administrador">Administrador</option>
                            <option value="invitado">Inivitado</option>
                          </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>Contraseña</span>
                            </label>
                            <input style={{ backgroundColor: '#B1C483'}} type="password" name="contraseña_usuario" placeholder="Contraseña"  className="input input-bordered"
                             value={usuario.contraseña_usuario}
                             onChange={(e) => setUsuarios({...usuario,contraseña_usuario:e.target.value})}/>
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>Numero de Identificacion</span>
                            </label>
                           <input type="number" name="numero_identificacion"  className="input input-bordered"
                            value={usuario.numero_identificacion}
                            onChange={(e) => setUsuarios({...usuario,numero_identificacion:e.target.value})}/>
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" style={{ color: '#586E26' }}>Tipo de documento</span>
                            </label>
                           <select name="tipo_documento" value={usuario.tipo_documento}
                              onChange={(e) => setUsuarios({...usuario,tipo_documento:e.target.value})}>
                            <option >seleccione tipo de documento</option>
                            <option value="cc">cc</option>
                            <option value="ti">ti</option>
                            <option value="nit">nit</option>
                            <option value="pasaporte">pasaporte</option>
                           </select>
                            <label className="label">
                            </label>
                        </div>
                      
                        <div className="form-control mt-3">
                            <button onClick={actualizarUsuario} type="submit" className="btn btn-primary" style={{ backgroundColor: '#586E26', border: 'none', color: '#fff' }}>Actualizar Usuario</button>
                        </div>
                    </form>
          
            </div>
          
            </>
    )


}
export default  EditarUsuario  