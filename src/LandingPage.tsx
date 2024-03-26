import React, { useEffect, useState } from 'react';
import { landingPageDTO } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/listadoPeliculas';
export default function LandingPage (){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setPeliculas({enCartelera:
          [
            {
              id: 1, titulo: 'Spider-man: Far from Home',
              poster: 'https://m.media-amazon.com/images/M/MV5BZWQ3MGNkNjctOGQ0NS00Yjg5LWIyM2MtZTk2YzMxZjAwYmE1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg'
              
            },
            {
              id: 2, titulo: 'Moana',
              poster: 'https://m.media-amazon.com/images/I/814P0jE50UL._AC_UF894,1000_QL80_.jpg'
              
            }
          ], 
        proximosEstrenos:
        [
          {
        id: 3, titulo: 'Madame web',
        poster: 'https://i0.wp.com/plexmx.info/wp-content/uploads/2023/12/madame_web_ver2_xxlg.jpg'      
      },
      {
        id: 4, titulo: 'kung fu panda 4',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQWuuZag-m0fNTa6c_ueuL54ObfKwlGU4rYU5L9kcEw&s'      
      }
    ]
        });
      }
      , 500);
      return () => clearTimeout(timerId);
    }
    );
    return(
        <>
                <h3>En cartelera </h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />
        <br />
        <h3>Proximos estrenos </h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>

    )
}