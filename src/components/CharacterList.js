import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./character.css";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("http://localhost:5000/api/characters")
      .then(response => {
        console.log("Response: ", response.data[0].results);
        setCharacter(response.data[0].results);
        // console.log("character: ", character);
      })
      .catch(error => {
        console.log(`Error :`, error.response);
      });
  }, []);

  return (
    <section className="character-list">
      {character.map(item => {
        return (
          <div key={item.id}>
            <img src={item.image} />
            <p>{item.name}</p>
            <p className="status">{item.status}</p>
            <p>{item.species}</p>
            <p>{item.gender}</p>
          </div>
        );
      })}
    </section>
  );
}
