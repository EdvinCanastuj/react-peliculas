import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../peliculas/utils/Button";
import FromGroupText from "../peliculas/utils/FormGroupText";
import * as Yup from "yup";
import { generocracionDTO } from "./generos.model";

export default function FormularioGeneros(props: FormularioGenerosProps) {
    return(
        <Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}

        validationSchema={Yup.object({
          nombre: Yup.string()
            .max(50, "El nombre no puede tener más de 50 caracteres")
            .required("Este campo es obligatorio")
            .primeraLetraMayuscula(),
        })}
      >
        {(formikProps) => (
          <Form>
            <FromGroupText
              campo="nombre"
              label="Nombre"
              placeholder="Ejemplo: Drama"
            />
            <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
            <Link className="btn btn-secondary" to="/generos">
              Cancelar{" "}
            </Link>
          </Form>
        )}
      </Formik>
    )
}

interface FormularioGenerosProps {
    modelo: generocracionDTO;
    onSubmit(valores: generocracionDTO, accion: FormikHelpers<generocracionDTO>): void;
}