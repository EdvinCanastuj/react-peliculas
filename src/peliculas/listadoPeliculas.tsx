import PeliculaIndividual from "./peliculaIndividual";
import { Pelicula } from "./peliculas.model";
import css from "./listadopeliculas.module.css";
import ListadoGenerico from "./utils/listadoGenerico";
export default function ListadoPeliculas(props: listadoPelucaulasProps) {
    
    return (
        <>
        <ListadoGenerico lista={props.peliculas} >
            
            <div className={css.div}>
                {props.peliculas?.map(pelicula => <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />)}
            </div>
        </ListadoGenerico>
        </>
    )
}

interface listadoPelucaulasProps {
  peliculas?: Pelicula[];
}
