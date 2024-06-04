import React, { Children } from 'react'

const Title = ({className , title }) => {
  return (
<div className={`font-dmSans text-4xl font-bold  ${className}`}>{title}</div>
  )
}

export default Title