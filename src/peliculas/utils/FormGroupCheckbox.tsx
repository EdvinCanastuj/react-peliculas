import { Field } from "formik";

export default function FormGroupCheckbox(props: FormGroupCheckboxProps) {
    return(
        <div className="form-group form-check">
            <Field className="form-check" id={props.campo} name={props.label}
                type="checkbox" 
            />
            <label htmlFor={props.campo} className="form-check-label">{props.label}</label>

        </div>
    )
}
interface FormGroupCheckboxProps {
    label: string;
    campo: string;

}