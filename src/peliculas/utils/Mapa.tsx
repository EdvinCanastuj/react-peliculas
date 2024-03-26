import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { coordenadaDTO } from "./coordenadas.model";
import { useState } from "react";
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});
L.Marker.prototype.options.icon = DefaultIcon;


export default function Mapa(props: mapaProps){
    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>(props.coordenadas);
    return(
        <MapContainer
            center={[14.833345, -91.518175
            ]}
            zoom={15}
            style={{height: props.height}}
        >
            <TileLayer attribution="React Peliculas" 
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ClicMapa setPunto={coordenadas => {
                setCoordenadas([coordenadas]); 
                props.manejarClick(coordenadas);

            } }/>
            {coordenadas.map(coordenada => 
                <Marcador key={coordenada.lat + coordenada.lng} {...coordenada}/>
            )}
        </MapContainer>
    )    

}

function ClicMapa(props: clicMapaProps) {
    useMapEvent('click', (e) => {
        props.setPunto({lat: e.latlng.lat, lng: e.latlng.lng});
    }
    );
    return null;
}

interface clicMapaProps {
    setPunto(coordenadas: coordenadaDTO): void;
}

function Marcador(props: coordenadaDTO){
    return(
        <Marker position={[props.lat, props.lng]}/>
    )
}

interface mapaProps {
  height: string;
  coordenadas: coordenadaDTO[];
  manejarClick(coordenadas: coordenadaDTO): void;
}


Mapa.defaultProps = {
    height: '500px'
}