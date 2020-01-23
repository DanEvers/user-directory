import React from "react"

function Appcenter(props){
    return (
    <div className='data-container'>
    <h2 id='content-count'>{props.user.id}</h2>
    <h2 id='content-head'>{props.user.name.first} {props.user.name.last}</h2><br></br>
    <h3 id='content-info'>From: {props.user.city}, {props.user.country}</h3>
    <h3 id='content-info'>Job Title: {props.user.title}</h3>
    <h3 id='content-info'>Employer: {props.user.employer}</h3><br></br>
    <h3 id='add-info'>Favorite Movies: <li>{props.user.favoriteMovies}</li></h3>
    </div>
)
}


export default Appcenter;