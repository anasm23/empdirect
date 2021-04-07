import React from "react";
import "./style.css";

function Card(props) {
    return (
        
        <div className="card">
            <div className="div"><img alt={props.last} src={props.image}></img></div>
            <div className="div">{props.first} {props.last} </div>
            <div className="div">{props.gender}</div>
            <div className="div">{props.age}</div>
            <div className="div">{props.email}</div>
            <div className="div">{props.phone}</div>
        </div>
       
    );
}

export default Card;


