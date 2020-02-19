import React from 'react';
import FilmRow from "./FilmRow";

export default class  FilmListing extends React.Component {

    constructor(props){
        super(props);

        this.state={
            filter:'all',
        }

    }


    handleFilterClick=(filter)=>{
         console.log('Setting filter to' ,filter);

         this.setState({ filter: filter, });
    }

    render(){

        let showFilms = [];

        const allFilms = this.props.data.map((item, index) => {
          return <FilmRow
             handleDetailsClick={this.props.handleDetailsClick} 
             filmInfo={item} key={index} 
             isFave={this.props.faves.includes(item)} 
             onFaveToggle={() =>this.props.onFaveToggle(item)}/>
            });

        const favesFilms = this.props.faves.map((item, index) => {
           return <FilmRow 
              handleDetailsClick={this.props.handleDetailsClick} 
              filmInfo={item} key={index} 
              isFave={this.props.faves.includes(item)} 
              onFaveToggle={() =>this.props.onFaveToggle(item)}/>
            });


            this.state.filter === 'all' ? showFilms = allFilms : showFilms = favesFilms
        return(
            <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className='film-list-filter'>
                
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}` } 
                     onClick={() => this.handleFilterClick('all')}>
                    ALL
                    <span className="section-count"> {this.props.data.length} </span>
                </div>

                <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}` } 
                    onClick={() => this.handleFilterClick('faves')} >
                    FAVES
                    <span className="section-count"> {this.props.faves.length} </span>
                </div>

            </div>
        
            {showFilms}
        </div>
        );}
}


