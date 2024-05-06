import { conexion } from "../database/conexion.js"


export const registrarServicio = async (req,res)=>{
    try {
        let {tipo_servicios,fk_id_muestra,fk_formato}=req.body
        let sql=`insert into servicios (tipo_servicios,fk_id_muestra,fk_formato)values(?,?,?)`  
        const [respuesta]=await conexion.query(sql,[tipo_servicios,fk_id_muestra,fk_formato])
        if(respuesta.affectedRows>0){
            res.status(200).json({message:'Dato registrado con exito'})
        }else{
            res.status(404).json({message:'Dato no registrado'})
        }
    } catch (error) {
        res.status(500).json({message:'Error en el servidor'+error.message})
    }
}

export const listarServicios = async (req,res)=>{
    try {
        let sql=`select * from servicios`
        const [resultado]=await conexion.query(sql)
        if(resultado.length>0){
            res.status(200).json(resultado)
        }else{
            res.status(404).json({message:'Datos no encontrados'})
        }
    } catch (error) {
        res.status(500).json({message:'Error en el servidor'+error.message})
    }
}