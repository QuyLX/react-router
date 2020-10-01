import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import DirectionURL from '../router/DirectionURL';
import {BrowserRouter as Router,} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
            <DirectionURL />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;