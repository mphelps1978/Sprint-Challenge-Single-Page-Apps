import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./character.css";
import "../index.css";
import CharacterCard from "./CharacterCard";
import { Container, Col, Row } from "reactstrap";

const CharacterList = props => {
  // set the state for the data
  const [data, setData] = useState([]);
  // set the state for the Search Query
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCharacters = () => {
      Axios.get("http://localhost:5000/api/characters")
        .then(response => {
          // console.log("Response: ", response.data[0].results);

          // we're going to set a variable that contains an array of characters, using the search term as a filter
          const result = response.data[0].results.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase()),
          );
          // console.log("data: ", characters);

          // Now we populate our state with the data that's returned from the filter above
          setData(result);
          // console.log("character: ", data);
        })
        .catch(error => {
          console.log(`Error :`, error.response);
        });
    };
    getCharacters();
  }, [data]);

  // change our query state based on form input
  const handleInputChange = event => {
    setQuery(event.target.value);
    console.log("SearchForm: ", query);
  };

  return (
    <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          tabIndex="0"
          className="prompt searchName"
          placeholder="Search By Name"
          autoComplete="off"
        />
      </form>
      {/* {console.log("Data being passed to map: ", data)} */}

      {/* Now we're going to create a card for each item in the api, based on the filters we used */}
      <div className="grid-view">
        {data.map(item => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </div>
    </div>
  );
};
// TODO: Link each card up to a larger version of the card (Not in the MVP assignment)
const CharacterDetails = ({ character }) => {
  return (
    <Link to={`characters/${character.id}`}>
      <CharacterCard {...character} />
    </Link>
  );
};
export default CharacterList;
