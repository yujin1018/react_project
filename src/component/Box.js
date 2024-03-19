import React from 'react'

const Box = (props) => {
  return (
    <div className="box" alt="가위바위보">
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img}></img>
        <h2>Win</h2>
    </div>
  )
}

export default Box