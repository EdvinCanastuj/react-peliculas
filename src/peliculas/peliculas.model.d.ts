export interface Pelicula {
    id: number;
    titulo: string;
    poster: string;
}
export interface PeliculaCreacionDTO {
    titulo: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];
}
export interface landingPageDTO {
    enCartelera?: Pelicula[];
    proximosEstrenos?: Pelicula[];

}
