import React from 'react'

const Button = (props) => {
  return (
    <div style={{textAlign:props.align}}>
    <a href={props.links}>
      < button style={{borderRadius:props.radius ,width:props.width}}>
        {props.text}</button>
</a>
    </div>
  )
}

export default Button
