
import EditarEntidad from "../peliculas/utils/EditarEntidad";
import { urlGeneros } from "../peliculas/utils/endpoints";
import FormularioGeneros from "./FormularioGeneros";
import { generoDTO, generocracionDTO } from "./generos.model";

export default function EditarGenero(){

    
    return(
        <>
        <EditarEntidad<generocracionDTO, generoDTO>
            url={urlGeneros} urlIndice="/generos" nombreEntidad="Géneros">
            {(entidad, editar) =>             <FormularioGeneros modelo={entidad} 
                onSubmit={async valores => {
                    await editar(valores);
            }}/>}
        </EditarEntidad>

        </>

        
    )
}