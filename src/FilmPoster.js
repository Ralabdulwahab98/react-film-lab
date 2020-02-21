import React from 'react';

function FilmPoster (props){
    
        // const imgURL = "https://image.tmdb.org/t/p/w780";
        // const imgPath = props.imgPoster;

        return <img src={`https://image.tmdb.org/t/p/w780/${props.imgPoster}`} alt=" " />
            // <img src={imgURL+imgPath} alt="FilmPoster" />
            
    }
export default FilmPoster;