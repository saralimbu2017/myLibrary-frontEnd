import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Search'

 
class Test extends React.Component {
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
        clearInterval(handle)
      }
  
      var handle = setInterval (initialize, 2000)
    }
  }
  componentDidMount() {
    const bookId = this.props.location.identifier.bookId
    this.previewBook(bookId);
  }

  render() {
    return (
      <div className = "ui-main-wrapper">
        <div className = "ui-main">
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


export default Test;