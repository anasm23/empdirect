import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div class="card">
            <div className="card-text">
                <img className="img-fluid" alt={props.last} src={props.image} ></img>
                <div className="text1">{props.first} {props.last}</div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Age: {props.age}</li>
                <li class="list-group-item">Email: {props.email}</li>
                <li class="list-group-item">Phone no: {props.phone}</li>
            </ul>
        </div>
        //         <div className="card">
        //             <div className="card-img"><img alt={props.last} src={props.image}></img></div>
        //             <div className="card-text">Name: {props.first} {props.last} </div>
        //             <div className="card-text">Age: {props.age}</div>
        //             <div className="card-text">Email: {props.email}</div>
        //             <div className="card-text">Phone no: {props.phone}</div>
        //         </div>

    );
}

export default Card;
