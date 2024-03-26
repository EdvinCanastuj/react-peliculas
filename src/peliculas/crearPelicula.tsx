import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas"
export default function CrearPeliculas(){
    
    const generos: generoDTO[] = [{id: 1, nombre: 'Drama'}, {id: 2, nombre: 'Comedia'},
    {id: 3, nombre: 'Accion'}];

    const cines: cineDTO[] = [{id: 1, nombre: 'Cine 1'}, {id: 2, nombre: 'Cine 2'}];

    return(
    <>
        <h3>Crear pelicla</h3>
        <FormularioPeliculas
        actoresSeleccionados={[]}
        generosNoSeleccionados={generos}
        generosSeleccionados={[]}
        cinesSeleccionados={cines}
        cinesNoSeleccionados={[]}
            modelo={{titulo: '', enCines: false, trailer: ''}}
            onSubmit={valores => console.log(valores)}


        />  
    </>
    )
}