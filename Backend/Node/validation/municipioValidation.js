import { check } from "express-validator";

export const validateMunicipio =[
    check('tipo_servicios','El tipo de servicio es obligatorio').not().isEmpty().isLength({max:15}),
    check('fk_id_muestra','El dato muestra es obligatorio').not().isEmpty().isNumeric(),
    check('fk_formato','El dato formato es obligatorio').not().isEmpty().isNumeric()
]