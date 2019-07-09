import React from 'react';
import {withRouter} from 'react-router-dom';
import './Search.css';

class Search extends React.Component  {
  state= {
    books:[],
    bookName:'',
    redirect: false
  }
  handleFormSubmit = async(event) => { 
    event.preventDefault();
    const searchItem = this.state.bookName
    let startingIndex = 0
    const url = `http://localhost:8080/books?bookName=${searchItem}&recordIndex=${startingIndex}`
    let response = await fetch(url)
    //.then(res => res.text())
    const json = await response.json()
    //console.log(json)
    //const json = await response.json()
      //handleDataState
      this.setState({
      books: json,
      redirect: true 
      })
      this.props.history.push({
        pathname: '/books',
        state: { 
          books: this.state.books,
          bookName: this.state.bookName
         }
      })
  }
  handleFormChange = (event) => {
    this.setState({ 
      bookName: event.target.value 
    })
  }
  render(){
    return (<form onSubmit={this.handleFormSubmit}>
      <input className = "search-input" type = "search" name = "bookName"  value={this.bookName} onChange={this.handleFormChange} placeholder = "Enter book title"/>
      <button className = "btn-search">Search</button>
    </form>)

}
}

export default withRouter(Search);