import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import {Switch , Link, Route,BrowserRouter as Router, Redirect,  withRouter } from 'react-router-dom';

class Search extends React.Component  {
  state= {
    books:[],
    bookName:'',
    redirect: false
  }
  handleFormSubmit = async(event) => { 
    event.preventDefault();
    const searchItem = this.state.bookName
    const url = `http://localhost:8080/books?bookName=${searchItem}`
    let response = await fetch(url)
    const json = await response.json();
      // .then(res => res.json())
      // .then(res => {
        //let books   = this.props.books
        //let redirect = this.props.redirect
        this.setState({
          books: json,
          redirect: true 
        })
     
       // this.props.history.push( '/books', {books:this.state.books });

        this.props.history.push({
          pathname: '/books',
          state: { books: this.state.books }
        })
        //this.props.history.push("/game_search")
      // })
    //   const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    //   const json = await response.json();
    //   this.setState({ data: json });
    // }
   
  }
  handleFormChange = (event) => {
    this.setState({ bookName: event.target.value })
  }
  render(){
    return (    <form onSubmit={this.handleFormSubmit}>
    <input type = "search" name = "bookName" className = "" value={this.bookName} onChange={this.handleFormChange}/>
    <button className = "btn-search">Search</button>
  </form>)

}
}

export default withRouter(Search);