import IndiceEntidad from "../peliculas/utils/IndiceEntidad";
import { urlGeneros } from "../peliculas/utils/endpoints";
import { generoDTO } from "./generos.model";

export default function InicioGeneros() {
    return (
        <>
            <IndiceEntidad<generoDTO>
                url={urlGeneros}
                urlCrear="generos/crear"
                titulo="Generos"
                nombreEntidad="Genero"
            >
                {(generos, botones) => (
                    <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generos?.map((genero) => (
                                <tr key={genero.id}>
                                    <td>
                                        {botones(`/generos/editar/${genero.id}`, genero.id)}
                                    </td>
                                    <td>{genero.nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                )}
            </IndiceEntidad>
        </>
    );
}
