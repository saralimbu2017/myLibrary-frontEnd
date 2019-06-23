import React from 'react';
import {withRouter} from 'react-router-dom';

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
    const json = await response.json()
      this.setState({
      books: json,
      redirect: true 
      })
      this.props.history.push({
        pathname: '/books',
        state: { books: this.state.books }
      })
  }
  handleFormChange = (event) => {
    this.setState({ bookName: event.target.value })
  }
  render(){
    return (<form onSubmit={this.handleFormSubmit}>
      <input type = "search" name = "bookName" className = "" value={this.bookName} onChange={this.handleFormChange}/>
      <button className = "btn-search">Search</button>
    </form>)

}
}

export default withRouter(Search);