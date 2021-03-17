import React from "react";
import "./style.css";

function Card(props) {
    return (

        <div className="card">
            <div>{props.first} {props.last} </div>
            <div><img alt={props.last} src={props.image}></img></div>
            <div>{props.gender}</div>
            <div>{props.age}</div>
            <div>{props.email}</div>
            <div>{props.phone}</div>
        </div>
    );
}

export default Card;