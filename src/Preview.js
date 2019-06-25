import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search'
import './Preview.css';
import Spinner from 'react-spinner-material';

class Preview extends React.Component {
  previewBook(bookId){
    const script = document.createElement("script")
    script.src = "https://www.google.com/books/jsapi.js"
    script.type = 'text/javascript'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => {
      let google = window.google;
      google.books.load()
      //console.log(bookId)
      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('bookViewer'));
        //viewer.load('ISBN:0738531367')
        viewer.load(bookId)
       
        clearInterval(handleInitilize)
       
      }
     
      const handleInitilize = setInterval (initialize, 2000)
    }
  }
  componentDidMount() {
    const bookId = this.props.location.identifier.bookId
    if(bookId ) {
      
      this.previewBook(bookId)
      
    }
  }
 

  render() {
    setTimeout( () => document.getElementById('spinner').remove(), 3200)
    return (
      <div className = "ui-main-wrapper">
        <div className = "ui-main">
          <div id = "spinner" >
            Page Loading....
            <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
          </div>
          <div id="bookViewer" style={{ height: "700px", width: "1000px"}}>
          </div> 
        </div>
        <div className = "ui-search">
          <Search />
        </div>
      </div> 
    );
  }
}


export default Preview;