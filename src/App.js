import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Box from './Box'
import { withRouter } from "react-router";

class App extends React.Component {
  state= {
    books:[
    ],
    bookName:''
  }

  submitForm = (event) => { 
    event.preventDefault();
    const searchItem = this.state.bookName
    const url = `http://localhost:8080/books?bookName=${searchItem}`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          books: res
        })
      })
  }
  handleFormChange = (event) => {
    this.setState({ bookName: event.target.value })
  }
  render() {
    return (
      <div className="App">
        <div className = "ui-container"> 
          <Form handleSubmit = {this.submitForm} value ={this.state.bookName} handleChange={this.handleFormchange}/>     
        </div>
      </div>
    );
  }
}




export default App;

