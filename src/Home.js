import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search'

class Home extends React.Component {

  render() {
    return  <div className = "ui-main-wrapper">
      <div className = "ui-main">

      </div>
      <div className = "ui-search">
        <Search />
      </div>
    </div>
  }
}

export default Home;
