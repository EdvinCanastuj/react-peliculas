import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; 
import Menu from "./peliculas/utils/Menu";
import rutas from './route-config';
import configurarValidaciones from "./validaciones";

configurarValidaciones();

function App() {
  return (
    <Router>
      <Menu />
      <div className="container">
        <Routes>
          {rutas.map((ruta) => 
            <Route key={ruta.path} path={ruta.path} element={<ruta.component />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;