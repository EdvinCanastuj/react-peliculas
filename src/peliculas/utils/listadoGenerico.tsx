import { ReactElement } from "react";
import Cargando from "./cargando";

export default function ListadoGenerico(props: listadoGenericoProps) {

    if(!props.lista || props.lista.length === 0) {
        if(props.cargandoUI) {
            return props.cargandoUI;
        } 
        return <Cargando />
    } else if (props.lista.length === 0) {
        if(props.listadoVacioUI) {
            return props.listadoVacioUI;
        }
        return <h3>No hay elementos para mostrar</h3>
    } else {
        return props.children;
    }
}

interface listadoGenericoProps {
    lista?: any[];
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}