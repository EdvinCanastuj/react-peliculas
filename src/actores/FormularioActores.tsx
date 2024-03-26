import { Formik, FormikHelpers,Form } from "formik";
import { actoresCreacionDTO } from "./actores.model";
import FormGroupText from "../peliculas/utils/FormGroupText";
import Button from "../peliculas/utils/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormGroupFecha from "../peliculas/utils/FormGrupFecha";
import FormGrupImagen from "../peliculas/utils/FormGrupImagen";
import FormGrupMarkdown from "../peliculas/utils/FormGrupMarkdown";

export default function FormularioActores(props: formularioActoresProps) { 
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })
            }
            >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"/>
                    <FormGroupFecha campo="fechaNacimiento" label="Fecha de Nacimiento"/>
                    <FormGrupImagen campo="foto" label="Foto" imagenURL={props.modelo.fotoURL}></FormGrupImagen>
                    <FormGrupMarkdown campo="biografia" label="Biografia"/>
                    <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>

            )}
            
        </Formik>
    );
}
interface formularioActoresProps {
    modelo: actoresCreacionDTO;
    onSubmit(valores: actoresCreacionDTO, acciones: FormikHelpers<actoresCreacionDTO>): void;
}