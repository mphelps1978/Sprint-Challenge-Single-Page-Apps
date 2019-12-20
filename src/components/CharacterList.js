import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./character.css";
import "../index.css";
import CharacterCard from "./CharacterCard";
import { Container, Col, Row } from "reactstrap";

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
    <div className="grid-view">
      {character.map(item => (
        <CharacterCard key={item.id} character={item} />
      ))}
    </div>
  );
};

const CharacterDetails = ({ character }) => {
  return (
    <Link to={`characters/${character.id}`}>
      <CharacterCard {...character} />
    </Link>
  );
};
export default CharacterList;
