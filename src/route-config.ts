import LandingPage from "./LandingPage";
import InicioGeneros from "./generos/IndiceGeneros";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import Crearcines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";
import CrearPeliculas from "./peliculas/crearPelicula";
import EditarPeliculas from "./peliculas/editarPeicula";
import FiltroPeliculas from "./peliculas/filtrodepeliculas";
import RedireccionarAlLanding from "./peliculas/utils/redireccionarAlLandig";

const rutas = [

    { path: '/generos/crear', component: CrearGenero },
    { path: '/generos/editar/:id',component: EditarGenero },
    { path: '/generos', component: InicioGeneros, exact: true},

    { path: '/actores/crear', component: CrearActores},
    { path: '/actores/editar/:id', component: EditarActores},
    { path: '/actores', component: IndiceActores, exact: true},

    { path: '/cines/crear', component: Crearcines},
    { path: '/cines/editar/:id', component: EditarCines},
    { path: '/cines', component: IndiceCines, exact: true},

    { path: '/peliculas/crear', component: CrearPeliculas},
    { path: '/peliculas/editar/:id', component: EditarPeliculas},
    { path: '/peliculas/filtrar', component: FiltroPeliculas},

    {
        path: '/',
        component: LandingPage,
        exact: true
    },

    { path: '*', component: RedireccionarAlLanding }
    
];

export default rutas;