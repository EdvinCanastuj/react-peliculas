import { useEffect, useState } from "react";

export default function Paginacion(props: paginacionProps) {
    const [listadoLinks, setListadoLinks] = useState<modelLink[]>([]);
    useEffect(() => {
        const paginaAnteriorHabilidata = props.paginaActual !== 1;
        const paginaAnterior = props.paginaActual - 1;
        const links: modelLink[] = [];
        links.push({
            pagina: paginaAnterior,
            habilitado: paginaAnteriorHabilidata,
            texto: 'Anterior',
            activo: false
        });
        for (let i = 1; i <= props.cantidadTodalDePaginas; i++) {
            if (i >= props.paginaActual - props.radio && i <= props.paginaActual + props.radio) {
                links.push({
                    texto: `${i}`,
                    activo: props.paginaActual === i,
                    habilitado: true,
                    pagina: i
                });
            }
        }
        const paginaSiguienteHabilitada = props.paginaActual !== props.cantidadTodalDePaginas && props.cantidadTodalDePaginas > 0;
        const paginaSiguiente = props.paginaActual + 1;
        links.push({
            pagina: paginaSiguiente,
            habilitado: paginaSiguienteHabilitada,
            texto: 'Siguiente',
            activo: false
        });
        setListadoLinks(links);
    }, [props.paginaActual, props.cantidadTodalDePaginas, props.radio]);
    function obtenerClase(link: modelLink) {
        if(link.activo){
            return 'active pointer';
        }
        if(!link.habilitado){
            return 'disabled';
        }
        return "pointer";
    }
    
    function seleccionarPagina(link: modelLink) {
        if(link.pagina === props.paginaActual){
            return;
        }
        if(!link.habilitado){
            return;
        }
        props.onChange(link.pagina);

    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                {listadoLinks.map(link => 
                    <li key={link.texto} 
                        onClick={() => seleccionarPagina(link)} 
                        className={`page-item cursor ${obtenerClase(link)}`}>
                        <span className="page-link">{link.texto}</span>
                    </li>
                )}
            </ul>
        </nav>
    )
}

interface modelLink {
    pagina: number;
    habilitado: boolean;
    texto: string;
    activo: boolean;
}

interface paginacionProps {
    paginaActual: number;
    cantidadTodalDePaginas: number;
    radio: number;
    onChange: (pagina: number) => void;
}

Paginacion.defaultProps = {
    radio: 3
}