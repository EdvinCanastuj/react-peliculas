import FormularioCines from "./FormularioCines";

export default function Editarcines(){

    
    return(
        <>
        <h3>Editar Cines</h3>
        <FormularioCines
        modelo={{nombre: 'Sambi', latitud: 14.833345, longitud: -91.518175}}
        onSubmit={valores => console.log(valores)} />

        </>
    )
}