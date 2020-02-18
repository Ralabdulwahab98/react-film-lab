import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';

export default class App extends React.Component{
  
  render() {
  return (
  <div className="film-library">

       <FilmListing  data={TMDB.films} />
     
       <FilmDetails/>
     

  </div>
  );}

}