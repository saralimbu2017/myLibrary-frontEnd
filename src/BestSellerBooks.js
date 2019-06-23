import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Box from './Box'
import './Box.css';
class BestSellerBooks extends React.Component {
  state= {
    bestSellerBooks:[
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book1.png"},
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book1.png"},
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book1.png"},
      {name: "So Good They Can’t Ignore You",author: "by Cal Newport",image:"/images/book1.png"}
    ]
  }
  render() {
    const { bestSellerBooks } = this.state
    //const { im } = this.state
    return (
            <div className = "ui-bestSellerBooks">
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
