import React from 'react';
import FilmRow from "./FilmRow";

export default class  FilmListing extends React.Component {

    render(){
        const allListing = this.props.data.map(function (item,index) {
            return <FilmRow filmInfo={item} key={item.id} />
        });
        return(
         <div>
            <h1 className="section-title"> FILMS </h1>
            {allListing}
         </div>
        );}
}


