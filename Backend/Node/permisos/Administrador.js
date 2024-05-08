import jwt from 'jsonwebtoken'

export const Administrador=async(req,res,next)=>{
    let token = req.headers.token;
    const decodedToken = jwt.decode(token)
    let rol = decodedToken.user[0].rol_usuario
    if (rol != "administrador"){
        return res.status(401).json({"message" : "No tienes permisos para realizar esta acción."})
    }
    else{
        next()
    }
}
export const AdministradorEncargados=async(req,res,next)=>{
    let token = req.headers.token;
    const decodedToken = jwt.decode(token)
    let rol = decodedToken.user[0].rol_usuario
    console.log(rol)
    if (rol === "administrador" || rol === "encargado") {
        next();
    } else {
        return res.status(401).json({"message" : "No tienes permisos para realizar esta acción."});
    }
}