import axios from "axios";
import FormularioGeneros from "./FormularioGeneros";
import { generocracionDTO } from "./generos.model";
import { urlGeneros } from "../peliculas/utils/endpoints";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../peliculas/utils/MostrarErrores";
import { useState } from "react";
export default function Generos() {
  const history = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);
  async function crear(genero: generocracionDTO) {
    try{
      await axios.post(urlGeneros, genero);
      history('/generos');
    }
    catch(error){
      setErrores(error.response.data);
    }
  }
  return (
    <>
      <h3>Crear Generos</h3>
      <MostrarErrores errores={errores} />
      <FormularioGeneros modelo={{nombre:''}} 
        onSubmit={async valores => {
          await crear(valores);
      }}/>  
    </>
  );
}
