import './SelectorMultiple.css'

export default function SelectorMultiple(props: SelectorMultipleProps) {
    function seleccionar(item: selectorMultipleModel){
        const seleccionados = [...props.sleccionados, item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);
        props.onChange(seleccionados, noSeleccionados);

    }
    function deseleccionar(item: selectorMultipleModel  ){
        const noSeleccionados = [...props.noSeleccionados, item];
        const seleccionados = props.sleccionados.filter(valor => valor !== item);
        props.onChange(seleccionados, noSeleccionados);
    }
    function seleccionarTodos(){
        const seleccionados = [...props.sleccionados, ...props.noSeleccionados];
        const noSeleccioados: selectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccioados);
    }
    function deseleccionarTodos(){
        const noSeleccionados = [...props.noSeleccionados, ...props.sleccionados];
        const seleccionados: selectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);
    }
    return(
        <div className="selector-multiple">
            <ul>
                {props.noSeleccionados.map(item => 
                    <li key={item.llave} onClick={() => seleccionar(item)}>{item.valor}</li>)}
            </ul>
            <div className="selector-multiple-totones">
                <button type="button" onClick={seleccionarTodos}>{'>>'}</button>
                <button type="button" onClick={deseleccionarTodos}>{'<<'}</button>
            </div>
            <ul>
                {props.sleccionados.map(item => 
                    <li key={item.llave} onClick={() => deseleccionar(item)}>{item.valor}</li>)}
            </ul>

        </div>
    )

}

interface SelectorMultipleProps {
    sleccionados: selectorMultipleModel[];
    noSeleccionados: selectorMultipleModel[];
    onChange(sleccionados: selectorMultipleModel[], noSeleccionados:selectorMultipleModel[]): void;
}

export interface selectorMultipleModel {
    llave: number;
    valor: string;
}