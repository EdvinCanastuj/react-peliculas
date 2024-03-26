import { ChangeEvent, useState } from "react";
import { useFormikContext } from "formik";
//import { Form } from "react-router-dom";

export default function FormGrupImagen(props: FormGrupImagenProps) {
  const divStyle = {
    marginTop: "10px",
  };
  const imgStyle = {
    width: "450px",
  };
  const [imagenBase64, setImagenBase64] = useState("");
  const [imagenURL, setImagenURL] = useState(props.imagenURL);
  const { values } = useFormikContext<any>();
  const ManejarOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const archvivo = e.currentTarget.files[0];
      aBase64(archvivo)
        .then((representacionBase: string) =>
          setImagenBase64(representacionBase)
        )
        .catch((error) => console.error("Error", error));

      values[props.campo] = archvivo;
      setImagenURL("");
    }
  };

  const aBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div className="form-group">
      <label htmlFor="">{props.label}</label>
      <div>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={ManejarOnchange}
        />
      </div>
      {imagenBase64 ? (
        <div>
          <div style={divStyle}>
            <img  src={imagenBase64} alt="imgaen seleccionada" style={imgStyle} />
          </div>
        </div>
      ) : null}
            {imagenURL ? (
        <div>
          <div style={divStyle}>
            <img  src={imagenURL} alt="imgaen seleccionada" style={imgStyle} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

interface FormGrupImagenProps {
  label: string;
  campo: string;
  imagenURL: string;
}

FormGrupImagen.defaultProps = {
    imagenURL: ''
};
