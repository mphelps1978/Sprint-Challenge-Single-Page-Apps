import React from "react";
import Header from "./components/Header.js";
import { Switch, Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/characters/:id">
          <CharacterCard />
        </Route>
        <Route path="/">
          <CharacterList />
        </Route>
      </Switch>
    </main>
  );
}
