import React from 'react'
import { bookmarkic } from '../svg'
import './listContainer.css'

function ListContainer(props) {
  return (
    <div className='listContainer'>
    {bookmarkic}
    <span className='itemOrder'>Order: {props.order}</span>
        
    </div>
  )
}

export default ListContainer