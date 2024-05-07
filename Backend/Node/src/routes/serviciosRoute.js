import { Router } from "express";
import { actualizarServicios, eliminarServicios, listarServicios, listarServiciosId, registrarServicio } from "../controllers/serviciosController.js";


const rutaServicios = Router()

rutaServicios.get('/listar',listarServicios)
rutaServicios.get('/listar/:id',listarServiciosId)
rutaServicios.post('/registrar',registrarServicio)
rutaServicios.put('/actualizar/:id',actualizarServicios)
rutaServicios.delete('/eliminar/:id',eliminarServicios)


export default rutaServicios
