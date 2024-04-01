import EditarEntidad from "../peliculas/utils/EditarEntidad";
import { urlCines } from "../peliculas/utils/endpoints";
import FormularioCines from "./FormularioCines";
import { cineCracionDTO, cineDTO } from "./cines.model";

export default function Editarcines(){

    
    return(
        <EditarEntidad<cineCracionDTO, cineDTO>
            url={urlCines} urlIndice="/cines" nombreEntidad="Cines">
            {(entidad, editar) =>             <FormularioCines modelo={entidad} 
                onSubmit={async valores => {
                    await editar(valores);
            }}/>}
        </EditarEntidad>
    )
}