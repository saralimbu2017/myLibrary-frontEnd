import React from 'react';
import logo from './logo.svg';
import {Switch , Link, Route,BrowserRouter as Router, Redirect} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Books from './Books';
import BestSellerBooks from './BestSellerBooks';
import Book from './Book';

class App extends React.Component {
  render() {

    return (
      <Router>
        <div className="App">
          <div className = "ui-container">
            <header>
              <h1>My Library</h1>
            </header>
           
            <nav>
              <Link to="/" className = "ui-link">Home</Link>
              <Link to="/about" className = "ui-link">About</Link>
            </nav>
           
              <Switch>
                <Route exact path="/" component = {Home} />
                <Route exact path="/bestSellerBooks" component = {BestSellerBooks} />
                <Route path="/about" component = {About} />
                <Route path="/books" component = {Books} />
                {/* <Route path="/book/:id" render = {(props) => <Book {...props } />} /> */}
                <Route path="/book/:id" component = {Book} />} />
              </Switch>
            
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;

