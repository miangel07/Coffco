import React from "react";
import {Route, Routes } from "react-router-dom";
import LoginPages from './pages/loginPage';
import Inicio from './pages/inicio';
import AdministrarUsurio from './pages/administrarUsuarios';




const App = () => {
return (
<>
<Routes>
        <Route exact path="/" element={<LoginPages/>}></Route>
        <Route exact path="/inicio" element={<Inicio/>}></Route>
        <Route exact path="/administarusuario" element={<AdministrarUsurio/>}></Route>
    </Routes>
</>
);
};
export default App;
