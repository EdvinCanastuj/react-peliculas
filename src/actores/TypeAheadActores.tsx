
import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";
import { ReactElement, useState } from "react";


export default function TypeAheadActores(props: TypeAheadActoresProps) {
        const actores: actorPeliculaDTO[] = [
        {
        id: 1, nombre: 'Tom Holland', personaje: 'Spiderman', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg/800px-Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg'
        },
        {
        id: 2, nombre: 'Fernando', personaje: 'Samule L Jacson', foto: 'https://m.media-amazon.com/images/M/MV5BYTI4MGE4ZGYtNDk2MC00MTc0LThkMmEtYzllY2VkYWZmNzQ1XkEyXkFqcGdeQW5pY2pt._V1_QL75_UX500_CR0,0,500,281_.jpg'
        },        {
            id: 3, nombre: 'Felix', personaje: 'Samule L Jacson', foto: 'https://m.media-amazon.com/images/M/MV5BYTI4MGE4ZGYtNDk2MC00MTc0LThkMmEtYzllY2VkYWZmNzQ1XkEyXkFqcGdeQW5pY2pt._V1_QL75_UX500_CR0,0,500,281_.jpg'
            }
    
    ]
    const seleccion: actorPeliculaDTO[] = [];
    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined);

    function manejarDragStart(actor: actorPeliculaDTO){
        setElementoArrastrado(actor);
    }
    function manejarDragOver(actor: actorPeliculaDTO){
        if(!elementoArrastrado){
            return;
        }
        if(actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = props.actores.findIndex(x => x.id === actor.id);

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);
        }
    }
    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {
                    if (typeof actores[0] !== 'string' && props.actores.findIndex(x => x.id === (actores[0] as actorPeliculaDTO).id) === -1) {
                        props.onAdd([...props.actores, actores[0] as actorPeliculaDTO]);
                    }
                }}
                options={actores}
                labelKey={actores => typeof actores === 'string' ? actores : actores.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip = {true}
                selected={seleccion}
                renderMenuItemChildren={(option, props, index) => (
                    <>
                      <img alt="imagen actor" src={typeof option === 'string' ? '' : (option as actorPeliculaDTO).foto} 
                      style={{width: '50px', height: '50px', marginRight: '10px'}}
                      />
                      <span>{typeof option === 'string' ? option : (option as actorPeliculaDTO).nombre}</span>
                    </>
                  )}
            />
            <ul className="list-group">
                    {props.actores.map((actor) => (
                        <li
                        draggable={true}
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        className="list-group-item list-group-item-action" key={actor.id}>
                            {props.listadoUI(actor)}
                            <span className="badge badge-primary badge-pill pointer" style={{marginLeft:'0.5rem'}} onClick={()=> props.onRemove(actor)}>
                                X
                            </span>
                        </li>
                    ))}
            </ul>
        </>
    )
}

interface TypeAheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actor: actorPeliculaDTO[]): void;
    listadoUI(actore: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}