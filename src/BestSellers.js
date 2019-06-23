import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search'

class BestSellers extends React.Component {
  state= {
    bestSellerBooks:[
      {name: "",image:"/images/wood.jpg"},
      {name: "",image:"/images/wood.jpg"},
      {name: "",image:"/images/wood.jpg"}
    ]
  }
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

export default BestSellers;
