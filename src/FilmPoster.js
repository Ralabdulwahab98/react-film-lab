import React from 'react';

export default class FilmPoster extends React.Component{
    

    render() {
        const imgURL = "https://image.tmdb.org/t/p/w780";
        const imgPath = this.props.imgPoster.poster_path;

        return (
            <img src={imgURL+imgPath} alt="FilmPoster" />
        );
    }
}