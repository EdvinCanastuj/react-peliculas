import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import './FormGrupMarkdown.css'
export default function FormGrupMarkdown(props: FormGrupMarkdownProps) {
    const {values} = useFormikContext<any>();
    return(
        <div className="form-group form-markdown">
            <div>
            <label htmlFor="">{props.label}</label>
                <div>
                    <Field name={props.campo} as="textarea" className="form-textarea"/> 
                </div>
            </div>

            <div>
                <label htmlFor="">{props.label} (preview):</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
interface FormGrupMarkdownProps {
    campo: string;
    label: string;
}