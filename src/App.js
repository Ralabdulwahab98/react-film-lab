import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';
import axios from "axios"


export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      films: TMDB.films,
      faves:[],
      current:{},
    };

    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
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


   handleDetailsClick = (film) => { 
     console.log(' handleDetailsClick clicked')
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
       
   axios({
    method: 'get',
    url: url
      })
      .then(res => { 
        console.log(res) // take a look at what you get back!
        // let oneMove = res.data.results[0];
        // console.log(oneMove);
        this.setState({ current: res.data.results }) 
      
      })
      .catch(err => {
        console.log('ERR',err);
      });  
      console.log(film.target , 'clicked for details');
        // this.setState({ current: film });
       //  current: [...film] });
        // current: this.state.current +film });
  }

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
      film={this.state.current}
      // data={TMDB.films}
      // current={TMDB.current} 
      />

     </div>
  //  </div>
  );}

}