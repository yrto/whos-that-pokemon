import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhosThatPokemonContainer from "./whos-that-pokemon/WhosThatPokemonContainer";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact={true} path="/">
          <WhosThatPokemonContainer />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
}

export default App;
