import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch , Link, Route,BrowserRouter as Router, Redirect} from 'react-router-dom';
import Search from './Search'

class Home extends React.Component {

  render() {
    return <div >
        <Search />
    </div>
  }
}

export default Home;
