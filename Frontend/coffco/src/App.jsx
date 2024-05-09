import React from "react";

//importar pages

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistroPage from './pages/RegistroPage';
import RegistroComponent from "./components/RegistroComponent";

//importar components

const App = () => {
return (
<>
<Router>
      <Switch>
        <Route exact path="/">
          {/* Página de inicio */}
        </Route>
        <Route exact path="/registro">
          <RegistroPage />
        </Route>
        {/* Otras rutas */}
      </Switch>
    </Router>
</>
);
};
export default App;
