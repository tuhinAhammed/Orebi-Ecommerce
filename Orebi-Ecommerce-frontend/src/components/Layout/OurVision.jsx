import React from 'react'

const OurVision = ({cardTitle , des , className}) => {
  return (
    <div className={`${className}`}>
        <div className="cardTitle text-base font-bold font-dmSans">{cardTitle}</div>
        <div className="des py-4 text-base  font-dmSans text-secondary">{des}</div>
    </div>
  )
}

export default OurVision