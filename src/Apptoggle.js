import React, {Component} from "react";
import Appcenter from './Appcenter'

function Apptoggle(props) {
        return (
            <div className='data-toggle'>
            <button onClick={() => props.goBack(props.id)}>Previous</button>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
            <button onClick={() => props.goNext(props.id)}>Next</button>
            </div>
        )
    }

export default Apptoggle;