import React from 'react';
import logo from './logo.svg';
import {Switch , Link, Route,BrowserRouter as Router, Redirect} from 'react-router-dom';
import About from './About'
import Home from './Home'
import Books from './Books'
class App extends React.Component {



  render() {
    return (
      <Router>
        <div className="App">
          <div className = "ui-container">
            <Switch>
              <Route exact path="/" component = {Home} />
              <Route path="/about" component = {About} />
              <Route path="/books" component = {Books} />
            </Switch>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;

