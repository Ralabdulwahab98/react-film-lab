import React , { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      films:TMDB.films,
      faves:[],
      current:{},
    }
    // this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }

  handleFaveToggle = (film)=> {

    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);

    if (filmIndex === -1){
      faves.push(film);
     console.log( `Adding ${film.title} to faves...` );
      
    }else{
      faves.splice(filmIndex, 1);
      console.log( `Removing ${film.title} from faves...` );
    }

    this.setState({faves});
  } 


   handleDetailsClick = (film)=> { this.setState({ current: film }); }
  //  current: [...film] });
  //  current: this.state.current +film });
  
  render() {
    
  return (
    // remove it to fix the scroll bar in film list 
    // <div className="App" >
     <div className="film-library">
       
      <FilmListing 
      data={this.state.films}
      faves={this.state.faves} 
      onFaveToggle = { this.handleFaveToggle }
      handleDetailsClick={ this.handleDetailsClick }  />

      <FilmDetails 
      data={TMDB.films}
      current={TMDB.current} />

     </div>
  //  </div>
  );}

}