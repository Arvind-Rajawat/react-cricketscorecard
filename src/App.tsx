import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Teams from "./Teams";
import ScoreCard from "./ScoreCard";
import Bowler from "./Bowler";
import Batsman from "./Batsman";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>         
          <Route path="/teams" component={Teams} />
          <Route path="/ScoreCard" component={ScoreCard} />
          <Route path="/Batsman" component={Batsman} />
          <Route path="/Bowler" component={Bowler} />
          <Route path="/" component={Teams} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
