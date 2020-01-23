import React, {Component} from "react";
import Appcenter from './Appcenter'

class Apptoggle extends Component {
    constructor() {
        super();
    }

// goBack = () => {
//     this.setState.({

//     })
// }

// goNext = () => {
//     this.setState.({
            
//     })
// }

render () {
    return (
        <div className='data-toggle'>
        <button onClick={() => this.goBack}>Previous</button>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
        <button onClick={() => this.goNext}>Next</button>
        </div>
        )
    }
}

export default Apptoggle;