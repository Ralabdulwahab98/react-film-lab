import React from 'react'
import FilmPoster from "./FilmPoster";
import Fave from'./Fave';

export default class FilmRow extends React.Component{


    handleDetailsClick = (film)=>{
        return console.log('Fetching details for' ,film);

    }
    
render() {

     const fullYear = new Date(this.props.filmInfo.release_date);

    return (
     <div className="film-row" onClick={() => this.handleDetailsClick(this.props.filmInfo.title)}>
         <FilmPoster imgPoster={this.props.filmInfo}/>
        <div className="film-summary">
            <h1>{this.props.filmInfo.title}</h1>
            <p>{fullYear.getFullYear()}</p>
        </div>
        <Fave/>

     </div>
    
    );}
} 