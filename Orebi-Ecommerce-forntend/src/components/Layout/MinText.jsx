import React from 'react'

const MinText = ({className , text }) => {
  return (
    <div className={`${className}`}>
        <p className="text-base text-secondary font-dmSans">{text } </p>
    </div>
  )
}

export default MinText