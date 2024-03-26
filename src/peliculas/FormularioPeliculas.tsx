import { Form, Formik, FormikHelpers } from "formik";
import { PeliculaCreacionDTO } from "./peliculas.model";
import * as Yup from 'yup';
import FormGroupText from "./utils/FormGroupText";
import FormGroupCheckbox from "./utils/FormGroupCheckbox";
import FormGrupImagen from "./utils/FormGrupImagen";
import Button from "./utils/Button";
import { Link } from "react-router-dom";
import FormGroupFecha from "./utils/FormGrupFecha";
import SelectorMultiple, { selectorMultipleModel } from "./utils/SelectorMultiple";
import { generoDTO } from "../generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../cines/cines.model";
import TypeAheadActores from "../actores/TypeAheadActores";
import { actorPeliculaDTO } from "../actores/actores.model";

export default function FormularioPeliculas(props: FormularioPeliculasProps){
    const [actoresSeleccionados, setActoresSeleccionados] = useState<actorPeliculaDTO[]>(props.actoresSeleccionados);

    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados));

    const [cinesSeleccionados, setCinesSeleccionados] = useState(mapear(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados));

    function mapear(arreglo:{id: number, nombre: string}[]): selectorMultipleModel[]{
        return arreglo.map(valor => {
            return {llave: valor.id, valor: valor.nombre}
        });
    }

    return(
        <Formik
        initialValues={props.modelo}
        onSubmit={(valores, acciones) => {
            valores.generosIds = generosSeleccionados.map(valor => valor.llave);
            valores.cinesIds = cinesSeleccionados.map(valor => valor.llave);
            valores.actores = actoresSeleccionados;
            props.onSubmit(valores, acciones);
 
        }
        }
        validationSchema={Yup.object({
            titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
        })}
        >
        {(formikProps) => (
            <Form>
                <FormGroupText label="Título" campo="titulo" />
                <FormGroupCheckbox label="En cines" campo="enCines" />
                <FormGroupText label="Trailer" campo="trailer" />
                <FormGroupFecha label="Fecha de Lanzamiento" campo="fechaLanzamiento" />
                <FormGrupImagen campo="poster" label="Poster" imagenURL={props.modelo.posterURL} />

                <div className="form-group">
                    <label htmlFor="">Generos:</label>
                    <SelectorMultiple sleccionados={generosSeleccionados}
                    noSeleccionados={generosNoSeleccionados}
                    onChange={(seleccionados, noSeleccionados) => {
                        setGenerosSeleccionados(seleccionados);
                        setGenerosNoSeleccionados(noSeleccionados);
                    }} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Cines:</label>
                    <SelectorMultiple sleccionados={cinesSeleccionados}
                    noSeleccionados={cinesNoSeleccionados}
                    onChange={(seleccionados, noSeleccionados) => {
                        setCinesSeleccionados(seleccionados);
                        setCinesNoSeleccionados(noSeleccionados);
                    }} />   
                </div>
                <div className="form-group">
                    <TypeAheadActores 
                        onAdd={actor => {
                            setActoresSeleccionados(actor);
                        }}
                        onRemove={actor => {
                            const actores = actoresSeleccionados.filter(x => x !== actor);
                            setActoresSeleccionados(actores);
                        }}
                        actores={actoresSeleccionados}
                        listadoUI={(actore: actorPeliculaDTO) => (
                            <>
                                {actore.nombre} / <input type="texy" placeholder="personaje" value={actore.personaje} 
                                onChange={e => {
                                    const indice = actoresSeleccionados.findIndex(x => x.id === actore.id);
                                    const actores = [...actoresSeleccionados];
                                    actores[indice].personaje = e.currentTarget.value;
                                    setActoresSeleccionados(actores);
                                
                                }}
                                />
                            </>
                        )    
                        }
                    />
                </div>


                <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                <Link className="btn btn-secondary" to="/">Cancelar</Link>
            </Form>
        )}
        </Formik>
    )

}

interface FormularioPeliculasProps {
    modelo: PeliculaCreacionDTO;
    onSubmit(valores: PeliculaCreacionDTO, acciones:FormikHelpers<PeliculaCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actoresSeleccionados: actorPeliculaDTO[];
}