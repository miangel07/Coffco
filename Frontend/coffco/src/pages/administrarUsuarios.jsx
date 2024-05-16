import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
const AdministrarUsurioPage = () => {
    const icons = [
        { icon: <RiDeleteBinLine />, label: "Eliminar", link: "#" },

    ];
    const [usuarios,setUsuairios]=useState([])
    const [admin,setAdmin]=useState([])
    // la consultas de la cantidad de usuarios existentes
    const ConsultaUsers=()=>{
        axios.get('http://localhost:3000/usuario/consulta')
       .then(response=>{
        setAdmin(response.data)
       })
    }
    function ListarUsurios(){
        axios.get('http://localhost:3000/usuario/listar')
       .then(response=>{
        setUsuairios(response.data)
       })
    }
    function eliminarUsuario(id_usuario){
        axios.delete(`http://localhost:3000/usuario/eliminar/${id_usuario}`)
       .then(response=>{
           ListarUsurios()
          alert(response.data.message)
       })
    }
    //con esto se refresca la pagina por si sola
useEffect(()=>{
    ConsultaUsers()
    ListarUsurios()
   
})
    return (
        <>
         <Menu/>
       <main class="h-[calc(100vh-120px)] w-full absolute top-14">
        <aside id="sidebar"
            class="w-[60px] lg:w-[240px] h-[calc(100vh-120px)] whitespace-nowrap fixed shadow overflow-x-hidden transition-all duration-500 ease-in-out">
            <div class="flex flex-col justify-between h-full">
                <ul class="flex flex-col gap-1 mt-2">
                    <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a class="w-full flex items-center py-3" href="#">
                            <i class="fa-solid fa-house text-center px-5"></i>
                            <span class="whitespace-nowrap pl-1">Dashboard</span>
                        </a>
                    </li>

                    <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a class="w-full flex items-center py-3" href="#">
                            <i class="fa-solid fa-chart-line text-center px-5"></i>
                            <span class="whitespace-nowrap pl-1">Reports</span>
                        </a>
                    </li>

                    <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a class="w-full flex items-center py-3" href="#">
                            <i class="fa-solid fa-users text-center px-5"></i>
                            <span class="whitespace-nowrap pl-1">Users</span>
                        </a>
                    </li>
                </ul>

                <ul class="flex flex-col gap-1 mt-2">
                    <li class="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <a class="w-full flex items-center py-3" href="#">
                            <i class="fa-solid fa-right-from-bracket text-center px-5"></i>
                            <span class="pl-1">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

   
        <section id="content"
            class="w-[100wh-60px] lg:w-[100wh-250px] ml-[60px] lg:ml-[240px] p-5 right-0 transition-all duration-500 ease-in-out">
        
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div class="bg-slate-50 p-5 m-2 rounded-md flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Total Administradores</h3>
                        <p className="text-gray-500"></p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-gray-200 rounded-md"></i>
                </div>

                <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Total de  Encargados</h3>
                        <p class="text-gray-500">6</p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-green-200 rounded-md"></i>
                </div>

                <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Total de  Invitado</h3>
                        <p class="text-gray-500">6</p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-yellow-200 rounded-md"></i>
                </div>
                <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Total de Todos Los usuarios</h3>
                        <p class="text-gray-500">14</p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-yellow-200 rounded-md"></i>
                </div>

            </div>

            <div class="grid ">
             
            
             
                <div class="overflow-x-auto   shadow-md">
                    <table class="w-full">
                        <thead class="bg-gray-100 rounded-sm">
                            <tr>
                               
                                <th class="text-left">Id </th>
                                <th class="text-left">Nombre</th>
                                <th class="text-left">Apellido </th>
                                <th class="text-left">Correo </th>
                                <th class="text-left">Telefono</th>
                                <th class="text-left">Indentificacion</th>
                                <th class="text-left">Tipo De documento</th>
                                <th class="text-center">Rol</th>
                                <th class="text-center">Contraseña</th>
                                <th class="text-center">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                usuarios.map((usuarios) => (
                                    <tr key={usuarios.id_usuario}>
                                        <td>{usuarios.id_usuario}</td>
                                        <td>{usuarios.nombre_usuario}</td>
                                        <td>{usuarios.apellido_usuario}</td>
                                        <td>{usuarios.correo_electronico}</td>
                                        <td>{usuarios.telefono_usuario}</td>
                                        <td>{usuarios.numero_identificacion}</td>
                                        <td>{usuarios.tipo_documento}</td>
                                        <td>{usuarios.rol_usuario}</td>
                                        <td>{usuarios.contraseña_usuario}</td>
                                        <td >{icons.map((icons)=>{
                                            
                                            return(
                                                // con esto le damos funcion al boton que contiene la funcion eliminar usuarios del icono de la constante iconos donde
                                                //almacena los iconos recorre el array
                                                <a type="submit" onClick={()=>{eliminarUsuario(usuarios.id_usuario)}} href={icons.link} className="text-gray-500 hover:bg-gray-100 list-none hover:text-gray-900">
                                                    {icons.icon}
                                                </a>
                                            )
                                        })}</td>
                                        

                                    </tr>
                                ))
                            }


                         
                                <td>
                                    <div class="flex justify-between gap-1">
                                        <i title="Edit"
                                            class="fa-solid fa-pencil p-1 text-green-500 rounded-full cursor-pointer"></i>
                                        <i title="View"
                                            class="fa-solid fa-eye p-1 text-violet-500 rounded-full cursor-pointer"></i>
                                        <i title="Delete"
                                            class="fa-solid fa-trash p-1 text-red-500 rounded-full cursor-pointer"></i>
                                    </div>
                                </td>
                          

                           
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
             
                <div class="m-2 lg:col-span-1 shadow-md">
                    <h2 class="text-xl p-2">Pie Chart</h2>
                    <div id="pie_chart" class="w-full"></div>
                </div>

              
        
            </div>
        </section>
    </main>

        </>
            )
    }
export default AdministrarUsurioPage;