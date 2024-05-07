import { Router } from "express";
import { actualizarServicios, eliminarServicios, listarServicios, listarServiciosId, registrarServicio } from "../controllers/serviciosController.js";
import { validarToken } from "../controllers/AutentificacionLogin.js";


const rutaServicios = Router()

rutaServicios.get('/listar',validarToken,listarServicios)
rutaServicios.get('/listar/:id',validarToken,listarServiciosId)
rutaServicios.post('/registrar',validarToken,registrarServicio)
rutaServicios.put('/actualizar/:id',validarToken,actualizarServicios)
rutaServicios.delete('/eliminar/:id',validarToken,eliminarServicios)


export default rutaServicios
