import React from 'react'

export default function Cards(props) {
  return (
    <div className='Cards'>

      <div className='card_child'>
        <img src={props.url}/>
        {props.name}
      </div>
    </div>
  )
}
