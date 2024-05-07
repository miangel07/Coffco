import { Router } from "express";
import { actualizarTipoFormato, eliminarTipoFormato, listarTipoFormato, listarTipoFormatoId, registrarTipoFormato } from "../controllers/tipoFormatoController.js";


const rutaTipoFormato = Router()

rutaTipoFormato.get('/listar',listarTipoFormato)
rutaTipoFormato.get('/listar/:id',listarTipoFormatoId)
rutaTipoFormato.post('/registrar',registrarTipoFormato)
rutaTipoFormato.put('/actualizar/:id',actualizarTipoFormato)
rutaTipoFormato.delete('/eliminar/:id',eliminarTipoFormato)

export default rutaTipoFormato
