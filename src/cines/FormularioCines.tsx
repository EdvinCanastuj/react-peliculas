import { FormikHelpers, Formik, Form } from "formik";
import { cineCracionDTO } from "./cines.model";
import * as Yup from 'yup';
import FormGroupText from "../peliculas/utils/FormGroupText";
import Button from "../peliculas/utils/Button";
import { Link } from "react-router-dom";
import MapaFormulario from "../peliculas/utils/MapaFormulario";
import { coordenadaDTO } from "../peliculas/utils/coordenadas.model";
export default function FormularioCines(props: FormularioCinesProps){
    function transformarCoordenada(): coordenadaDTO[] | undefined {
        if (props.modelo.latitud && props.modelo.longitud){
            const respuesta: coordenadaDTO = {lat: props.modelo.latitud, lng: props.modelo.longitud};
            return [respuesta];
        }
        return undefined;
    }
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()})}
        >
        {(formaikProps) => (
            <Form>
                  <FormGroupText label="Nombre" campo="nombre" />  
                    <div style={{marginBottom:'1rem'}}>
                        <MapaFormulario campoLat={"latitud"} campoLng={"longitud"}
                        coordenadas={transformarCoordenada()}
                        />
                    </div>
                  <Button disabled={formaikProps.isSubmitting} type="submit">Salvar</Button> 
                  <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
            </Form>   
        )}
        </Formik>
    )
}

interface FormularioCinesProps {
    modelo: cineCracionDTO;
    onSubmit(valores: cineCracionDTO, acciones: FormikHelpers<cineCracionDTO>): void;
}
