export default function MostrarErrores(props: mostrarErroresProps){
    const style = { color: 'red'}
return (
    <>
        {props.errores && (
            <ul style={style}>
                {Array.isArray(props.errores) && props.errores.map((error, indice) => (
                    <li key={indice}>{error}</li>
                ))}
            </ul>
        )}
    </>
)
}
interface mostrarErroresProps {
    errores: string[];
}