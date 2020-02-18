import React from 'react';


export default class Fave extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isFave:false,

        }

    }

    handleClick = (e) =>{
        e.stopPropagation();
         console.log('handling Fave click!');

        this.setState({
            isFave: !this.state.isFave
        });
    }
    render(){
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return(
        <div className="film-row-fave add_to_queue" >
          <p className="material-icons" 
              onClick={this.handleClick} >
                  {isFave}
          </p>
        </div>
        );
    }
}