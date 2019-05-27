import React, { Component } from "react";
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import homePage from '../Home/Home';
import favouritesPage from '../Favourites/Favourites';

class App extends Component  {
  //renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" component={homePage} />
          <Route exact path ="/favourites" component={favouritesPage} />
        </div>
      </Router>
    )
  }

  

}

export default App;
