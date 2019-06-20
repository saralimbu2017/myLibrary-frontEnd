import React from 'react';

export default function Box(props) {
  return <li>
    {props.book.volumeInfo.title}
  </li>

}