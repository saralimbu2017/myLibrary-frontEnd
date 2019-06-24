import React from 'react'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, 
  faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

function Book(props) {
  //let  id = props.match.params.testvalue
  //let book = props.location.book
  //var book= listOfBooks.filter((book)=>(props.match.params.id)==book.id)
  //console.log(props.location.resource.book)
  // let stars = []
  // let numOfStars = props.location.resource.book.volumeInfo.averageRating;
  // let numHalfStar = numOfStars % 1;
 
  //if(noOfStars % 10 == 0){
    // for(var index = 0; index < Math.floor(numOfStars); index++) {
    //   stars.push(1)
    // }
    // if(numHalfStar !== 0) {
    //   stars.push(0.5)
    // }

  return (
    <div className = "ui-main-wrapper">
      <div className = "ui-main">
        <div className = "ui-bookSection"> 
          <div className = "ui-book-image">
          {/* <div> */}
            <div className = "ui-book-cover-pic" >
              <img  key = "book.id" src = {props.location.resource.book.volumeInfo.imageLinks.smallThumbnail}/>
              </div>
              <div className = "ui-book-rack">
              </div>

            {/* </div> */}
           
          </div>
          <div className = "ui-book-details">
          <div className = "ui-book-detail-poster">
          <img src = "/images/pin.png" />
          </div>
          <div className = "ui-book-detail-description">
          <h3>{props.location.resource.book.volumeInfo.title}</h3>
          
          <p>{props.location.resource.book.volumeInfo.description}</p>
          <h5>Author: {props.location.resource.book.volumeInfo.authors}</h5>
          <a href= {props.location.resource.book.volumeInfo.previewLink}>Preview </a> 

          </div>
          </div>
        </div> 
      </div>
      <div className = "ui-search">
          <Search />
      </div>
    </div>
  )
}
export default Book;