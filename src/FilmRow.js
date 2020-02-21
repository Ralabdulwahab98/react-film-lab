import React from 'react'
import FilmPoster from "./FilmPoster";
import Fave from'./Fave';

// handleDetailsClick = (film)=>{
//         return console.log('Fetching details for' , film);

//     }

function FilmRow (props) {


    
     const fullYear = new Date(props.filmInfo.release_date);

    return (
     <div className="film-row" 
    //   onClick={() => this.handleDetailsClick (this.props.filmInfo.title) }>
         onClick = {props.handleDetailsClick} >

         <FilmPoster imgPoster={props.filmInfo.poster_path}/>
         
        <div className="film-summary">

        <Fave onFaveToggle={props.onFaveToggle} 
             isFave={props.isFave}/>

            <h1>{props.filmInfo.title}</h1>
            <p>{fullYear.getFullYear()}</p>

        </div>

        

     </div>
    
    );
}
export default FilmRow;