import React, { Component } from 'react';
import './App.scss';
import Welcome from './components/welcome';
import Toolbar from './components/toolbar';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Team from './components/team';
import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>

        <div class='main'>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"/>

          <div>
            <Toolbar/>
          </div>

          <div>
            <Welcome /> 
          </div>

          <div id='services'>
            <Services /> 
          </div>
 
           <div id='portfolio'>
             <Portfolio /> 
           </div>

           <div id='team'>
             <Team /> 
           </div>

          {/* <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/team" component={Team} /> */}

        </div>
      </Router>

    )
  }
}

export default App;
