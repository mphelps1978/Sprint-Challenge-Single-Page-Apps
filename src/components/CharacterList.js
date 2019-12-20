import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./character.css";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      Axios.get("http://localhost:5000/api/characters")
        .then(response => {
          console.log("Response: ", response.data[0].results);
          setCharacter(response.data[0].results);
          // console.log("character: ", character);
        })
        .catch(error => {
          console.log(`Error :`, error.response);
        });
    };
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {character.map(item => (
        <CharacterCard key={item.id} character={item} />
      ))}
    </section>
  );
};

export default CharacterList;
