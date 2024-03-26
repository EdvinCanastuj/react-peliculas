import EditarEntidad from "../peliculas/utils/EditarEntidad";
import { urlActores } from "../peliculas/utils/endpoints";
import { convertirAcorAFormDatada } from "../peliculas/utils/formDataUtils";
import FormularioActores from "./FormularioActores";
import { actorDTO, actoresCreacionDTO } from "./actores.model";


export default function EditarActores() {
    const transformar = (actor: actorDTO) => {
        return {
        nombre: actor.nombre,
        biografia: actor.biografia,
        fechaNacimiento: new Date(actor.fechaNacimiento),
        fotoURL: actor.foto
        }
    }
    return (
        <>
            <EditarEntidad<actoresCreacionDTO, actorDTO>
                url={urlActores}
                urlIndice="/actores"
                nombreEntidad="Actores"
                transformatFormData={convertirAcorAFormDatada}
                transformar={transformar}
            >
                {(entidad, editar) => (
                    <FormularioActores
                        modelo={entidad}
                        onSubmit={ async valores => await editar(valores)}
                    />
                )}
            </EditarEntidad>
        </>
    );
}