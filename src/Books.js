import React from 'react'
import Search from './Search'
import './Books.css';
import {Link} from 'react-router-dom';


export default function Books(props) {
  function sliceBooks(array, size) {
    const bookCollection = [];
    let index = 0;
    while (index < array.length) {
      bookCollection .push(array.slice(index, size + index));
      index += size;
    }
    return bookCollection;
  }
  const bookCollection = sliceBooks(props.location.state.books,4)
  //console.log(bookCollection)
  return (
    <div className = "ui-main-wrapper">
      <div className = "ui-main">
        <div className = "ui-bestSellerBooks"> 
          { bookCollection.map(books =>
             <div>
              <div className = "ui-box">
             
                {books.map(book =>
                  <Link to={{pathname:`/book/${book.id}`,  resource: {book} }}>
                  <img  key = "book.title" src = {book.volumeInfo.imageLinks.smallThumbnail}/></Link>
                )}
              </div>
              <div className = "ui-rack">
              </div>
              </div>
          )}
          
        </div> 
      </div>
      <div className = "ui-search">
        <Search />
      </div>
    </div>
  )
}
