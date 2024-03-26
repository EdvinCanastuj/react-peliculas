import axios from "axios";
import FormularioActores from "./FormularioActores";
import { actoresCreacionDTO } from "./actores.model";
import { urlActores } from "../peliculas/utils/endpoints";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../peliculas/utils/MostrarErrores";
import { useState } from "react";
import { convertirAcorAFormDatada } from "../peliculas/utils/formDataUtils";

export default function CrearActores(){
    const nav = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);
    async function crear(actor: actoresCreacionDTO){
        try{
            const formData = convertirAcorAFormDatada(actor);
            await axios ({
                method: 'post',
                url: urlActores,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            
            });
            nav('/actores');
        }
        catch (error){
            setErrores(error.response.data);
        }
    }
    return(
        <>
            <h3>Crear Actores</h3>
            <MostrarErrores errores={errores} />
            <FormularioActores
        modelo={{nombre: '', 
                fechaNacimiento: undefined
            }}
        onSubmit={async valores => await crear(valores)}
        />
        </>

    )
}

