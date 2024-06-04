import React from 'react'

const Button = ({ className , text , onClick}) => {
  return (
    <button onClick = {onClick} className={`btn  py-4 text-sm font-bold border-2 border-primary transition duration-500 ease-in-out ${className}`}>{text}</button>
  )
}

export default Button