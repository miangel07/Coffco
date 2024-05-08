import { Router } from "express";
import { validarUsuarios,cerrarSesion } from "../controllers/AutentificacionLogin.js";
import { validationsLogin } from "../../validation/LoginValidations.js";
const RutaAuth = Router()

RutaAuth.post('/login',validationsLogin,validarUsuarios)
RutaAuth.post('/cerrarSesion',validationsLogin,cerrarSesion)




export default RutaAuth