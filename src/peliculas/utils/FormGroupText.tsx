import { ErrorMessage, Field } from "formik";
import React from "react";
import MostrarErrorcampo from "./MostrarErrorCampo";
export default function FormGroupText(props: formGroupTextProps) {
    return(
        <>
        <div className="form-group">
                {props.label ? <label htmlFor={props.campo}> {props.label} </label> : null} 
                <Field name={props.campo} type="text" className="form-control" placeholder={props.placeholder} />
                <ErrorMessage name={props.campo}>{mensaje =>
                    <MostrarErrorcampo mensaje={mensaje} />
                    }
                </ErrorMessage>

            </div>
        </>
    )
}

interface formGroupTextProps {
    campo: string;
    label?: string;
    placeholder?: string;  
}