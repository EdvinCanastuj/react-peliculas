import { actorPeliculaDTO } from "../actores/actores.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas(){
    const generosSeleccionados: generoDTO[] = [ {id: 2, nombre: 'Comedia'},
    {id: 3, nombre: 'Accion'}];
    const generosNoSeleccionados: generoDTO[] = [{id: 1, nombre: 'Drama'}];

    const cinesSeleccionados = [{id: 1, nombre: 'Cine 1'}];
    const cinesNoSeleccionados = [{id: 2, nombre: 'Cine 2'}];

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1, nombre: 'Tom Holland', personaje: 'Spiderman', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg/800px-Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg'
            }
    ];
    return(
    <>
        <h3>Editar pelicla</h3>
        <FormularioPeliculas
        actoresSeleccionados={actoresSeleccionados}
        cinesNoSeleccionados={cinesNoSeleccionados}
        cinesSeleccionados={cinesSeleccionados}
        generosNoSeleccionados={generosNoSeleccionados}
        generosSeleccionados={generosSeleccionados}
            modelo={{titulo: 'Spiderman', 
            enCines: true, 
            trailer: 'url' , 
            fechaLanzamiento: new Date('2019-01-01T00:00:00'), }}
            onSubmit={valores => console.log(valores)}
        />
    </>
    )
}