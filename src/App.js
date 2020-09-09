import React, { Component } from "react";
import Home from "./pages/home/home";
import Mainnav from "./pages/MainNav/Mainnav";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div>

      <Mainnav />


      <Switch>
         <Route path="/" exact component={Home} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
