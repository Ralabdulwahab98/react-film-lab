import React from 'react'
import FilmPoster from "./FilmPoster";

export default class FilmRow extends React.Component{
    
render() {

     const fullYear = new Date(this.props.filmInfo.release_date);

    return (
     <div className="film-row">
         <FilmPoster imgPoster={this.props.filmInfo}/>
        <div className="film-summary">
            <h1>{this.props.filmInfo.title}</h1>
            <p>{fullYear.getFullYear()}</p>
        </div>

     </div>
    
    );}
} 