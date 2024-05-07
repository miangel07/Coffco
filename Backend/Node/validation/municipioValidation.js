import { check } from "express-validator";

export const validateMunicipio =[
    check('nombre_municipio','El tipo de servicio es obligatorio').not().isEmpty().isLength({max:15}),
    
]