import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  console.log("Props On CharacterCard ", props);
  return (
    <span>
      <div>
        <img src={props.character.image} />
        <p>{props.character.name}</p>
        <p className="status">{props.character.status}</p>
        <p>{props.character.species}</p>
        <p>{props.character.gender}</p>
      </div>
    </span>
  );
}
