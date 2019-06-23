import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search'
import BestSellerBooks from './BestSellerBooks'

class Home extends React.Component {

  render() {
    return  <div className = "ui-main-wrapper">
      <div className = "ui-main">

        <div className = "ui-coverPic">
          <img src="/images/cover2.jpg"/>
        </div>
        {/* <div className = "ui-bestSellerBooks"> */}
          <BestSellerBooks />
        {/* </div> */}
      </div>
      <div className = "ui-search">
        <Search />
      </div>
    </div>
  }
}

export default Home;
