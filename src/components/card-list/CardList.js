import React from "react";
import { Card } from "../card/Card";
import "./CardList.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(({ name, id, email }) => {
        return <Card email={email} key={id} id={id} name={name} />;
      })}
    </div>
  );
};
