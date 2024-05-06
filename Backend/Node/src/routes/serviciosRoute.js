import { Router } from "express";
import { listarServicios, registrarServicio } from "../controllers/serviciosController.js";


const rutaServicios = Router()

rutaServicios.get('/listar',listarServicios)
rutaServicios.post('/registrar',registrarServicio)


export default rutaServicios
