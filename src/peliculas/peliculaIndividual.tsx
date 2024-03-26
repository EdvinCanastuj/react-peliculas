import { Pelicula } from "./peliculas.model";
import css from './peliculaindividual.module.css';
export default function PeliculaIndividual( props: PeliculaIndividualProps ) {
    const construirUrl = () => {
        return `/peliculas/${props.pelicula.id }`;
    }
  return (
    <div className={css.div}>
        <a href={construirUrl()}>
            <img src={props.pelicula.poster} alt="" />
        </a>
        <p>
            <a href={construirUrl()}>
                {props.pelicula.titulo}
            </a>
        </p>
    </div>
  );
}

interface PeliculaIndividualProps {
  pelicula: Pelicula;
}