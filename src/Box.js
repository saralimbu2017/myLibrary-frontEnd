import React from 'react';


export default function Box( props) {

  //const style = {backgroundColor:props.lang.selected ? 'red' : ''}
  const image = props.book.image
  return <div className = "ui-best-sellers">
    
    <img src = {image}/>
    {/* <p>{props.book.name}</p> */}
  </div>
}