import React from "react";



export const Button = ({text,onClick}) => {
  
    return (
      <button onClick={onClick} className='button-primary'>{text}</button>
    )
}

export const onHandlerGreetings = () => {
    alert('Hello User!')
}