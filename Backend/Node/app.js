import express from "express"; 
import bodyParser from "body-parser";
import rutaMunicipio from "./src/routes/municipioRoute.js";
import ruta from "./src/routes/muestraRoutes.js";
import DocumentosRoute from "./src/routes/DocumentosRoute.js";
import FormatoRoute from './src/routes/FormatoRoute.js';
import rutaUsuario from './src/routes/usuarioRoute.js';
import rutaDetalle from "./src/routes/detalleRoute.js";
import rutaFinca from "./src/routes/FincaRoute.js";
import rutaDatos from "./src/routes/DatosRouters.js";
import cors from "cors"; 
import RutaAuth from "./src/routes/AutonteficacionRoutes.js";
import EstadisticaRouter from "./src/routes/EstadisticaRouters.js";
import SubirArchivo from "./src/routes/SubirArchivoRouter.js";



const servidor = express();

servidor.use(bodyParser.json());

servidor.use(bodyParser.urlencoded({ extended: false }));
servidor.use(cors());
servidor.set('view engine', 'ejs');
servidor.set('views', './views');
servidor.use(express.static('./public')); 
servidor.use(cors());
servidor.use('/documents', (req, res) => {
    res.render('documentacion.ejs');
});

servidor.use("/municipio", rutaMunicipio);
servidor.use(SubirArchivo);
servidor.use("/muestra", ruta);
servidor.use("/documentos",DocumentosRoute );
servidor.use("/versiones", FormatoRoute);
servidor.use('/usuario', rutaUsuario);
servidor.use('/detalle', rutaDetalle);
servidor.use('/finca', rutaFinca);
servidor.use('/datos', rutaDatos);
servidor.use(EstadisticaRouter)
servidor.use(RutaAuth)
servidor.listen(3000, () => {
    console.log("servidor escuchando desde el puerto 3000");
});
