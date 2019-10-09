import React from "react";
import "./Card.css";

export const Card = props => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.id}?set=set4`} />
    <h2> {props.name}</h2>
    <p>{props.email}</p>
  </div>
);
