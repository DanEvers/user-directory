import React, {Component} from "react";
import Apptoggle from './Apptoggle'
import data from './data'

class Appcenter extends Component {
    constructor() {
        super();
            this.state = {
                id: 1,
                name: '',
                city: '',
                country: '',
                employer: '',
                title: '',
                favoriteMovies: [] 
            }
    };

render () {
    return (
    <div className='data-container'>
    <h2 id='content-head'>{this.state.name.first} {this.state.name.last}</h2><br></br>
    <h3 id='content-info'>From:{this.state.city}, {this.state.country}</h3>
    <h3 id='content-info'>Job Title:{this.state.title}</h3>
    <h3 id='content-info'>Employer:{this.state.employer}</h3><br></br>
    <h3 id='add-info'>Favorite Movie:{this.state.favoriteMovies}</h3>
    </div>
)
}
}

export default Appcenter;