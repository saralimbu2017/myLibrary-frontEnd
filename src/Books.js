import React from 'react'
import Search from './Search'

export default function Books(props) {
  //render() {
  return (
    <div className = "ui-main-wrapper">
      <div className = "ui-main">
        <ul>
          {props.location.state.books.map(book =>
            <li>
              {book.volumeInfo.title}
            </li>
          )}
        </ul>
      </div>
      <div className = "ui-search">
        <Search />
      </div>
    </div>
  )
}
