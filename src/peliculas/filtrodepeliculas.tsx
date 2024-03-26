import { Formik, Form, Field } from "formik";
import { generoDTO } from "../generos/generos.model";
import Button from "./utils/Button";

export default function FiltroPeluculas(){
    const valoresIniciales: FiltroPeliculasProps = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }
    const generos: generoDTO[] = [
        {id: 1, nombre: 'Drama'},
        {id: 2, nombre: 'Comedia'}
    ]

    return(
    <>
        <h3>Filtrar pelicla</h3>
        <Formik initialValues={valoresIniciales}
            onSubmit={valores => console.log(valores)}
        >
            {(formikProps) => (
                <Form>
                    <div className="form-inline">
                        <div className="form-group mb-2">
                            <label htmlFor="titulo" className="sr-only">
                                Titulo
                            </label>
                            <input type="text"
                             className="from-control"
                             id="titulo"
                             placeholder="Título de la película"
                             {...formikProps.getFieldProps('titulo')}
                             />
                        <div className="form-group mx-sm-3 mb-2">
                            <select id="" 
                                className="form-control"
                                {...formikProps.getFieldProps('generoId')}>
                                <option value="0">---Seleccione un género---</option>
                                {generos.map(genero => <option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field className="form-check-input" id="proximosEstrenos"
                            name="proximosEstrenos" type="checkbox" />
                            <label htmlFor="proximosEstrenos" className="form-check-label">
                                Próximos estrenos
                            </label>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field className="form-check-input" id="enCines"
                            name="enCines" type="checkbox" />
                            <label htmlFor="En Cines" className="form-check-label">
                                En Cines
                            </label>
                        </div>
                        <Button 
                        className="btn btn-primary mb-2 mx-sm-3"
                        onClick={()=> formikProps.submitForm()}>
                            Filtrar
                        </Button>
                        <Button 
                        className="btn btn-danger mb-2 "
                        onClick={()=> formikProps.setValues(valoresIniciales)}>
                            Limpiar
                        </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </>
    )
}
interface FiltroPeliculasProps{
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}