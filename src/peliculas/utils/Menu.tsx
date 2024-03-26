import { Link, useMatch } from "react-router-dom";

export default function Menu() {
  const claseActiva = "active";
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className={`navbar-brand ${useMatch("/") ? claseActiva : ""}`}>
          React Peliculas
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/generos" className={`nav-link ${useMatch("/generos") ? claseActiva : ""}`}>
              Géneros
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/peliculas/filtrar" className={`nav-link ${useMatch("/peliculas/filtrar") ? claseActiva : ""}`}>
            Filtrar Peliculas
          </Link>
            </li>
            <li className="nav-item">
            <Link to="/actores" className={`nav-link ${useMatch("/actores") ? claseActiva : ""}`}>
              Actores
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/cines" className={`nav-link ${useMatch("/cines") ? claseActiva : ""}`}>
              Cines
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/peliculas/crear" className={`nav-link ${useMatch("/peliculas/crear") ? claseActiva : ""}`}>
              Crear Peliculas
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
