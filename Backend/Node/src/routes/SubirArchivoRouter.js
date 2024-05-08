import { Router } from "express";
import {subirArchivo} from "../controllers/SubirArchivosControllers.js"


const SubirArchivo=Router();

SubirArchivo.post('/subir/archivo',subirArchivo)

export default SubirArchivo;
