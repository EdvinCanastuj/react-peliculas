import axios from "axios";
import FormularioCines from "./FormularioCines";
import { urlCines } from "../peliculas/utils/endpoints";
import { cineCracionDTO } from "./cines.model";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MostrarErrores from "../peliculas/utils/MostrarErrores";

export default function RearCines(){
    const nav = useNavigate();
    const [error, setError] = useState<string[]>([]);
    async function crear(cine: cineCracionDTO){
        try{
            await axios.post(urlCines, cine);
            nav('/cines');
        }
        catch(error){
            setError(error.response.data);
        }
    }
    return(
        <>
        <h3>Crear Cines</h3>
        <MostrarErrores errores={error} />
        <FormularioCines 
        modelo={{nombre: ''}} 
        onSubmit={async valores => await crear(valores)} />
        </>
    )
}