import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Box from './Box'
import './Box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class BestSellerBooks extends React.Component {
  state= {
    bestSellerBooks:[
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book1.jpeg"},
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book2.jpg"},
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book3.jpeg"},
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book4.jpg"}
    ]
  }
  render() {
    const { bestSellerBooks } = this.state
    const stars = [1,2,3,4,5];
    return (
            <div className = "ui-bestSellerBooks">
              <p>Top Rated Books{ stars.map(star=> <FontAwesomeIcon icon={faStar} />
              )} </p> 
              <div className = "ui-box">
                { bestSellerBooks.map(book =>
                  // <Box key={book.name} book= {book}/>
                  <img src = {book.image}/>
                )}
              </div>
              <div className = "ui-rack">

              </div>
            </div>
           

  )
  }
}

export default BestSellerBooks;
