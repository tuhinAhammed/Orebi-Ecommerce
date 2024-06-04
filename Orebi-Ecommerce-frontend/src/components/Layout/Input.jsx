import React from 'react'

const Input = ({inputTitle , inputPlaceholder , inpurtType , className}) => {
    return (
        <div className={`w-full ${className}`}>
            <p className='text-base text-primary font-dmSans font-bold'>{inputTitle}</p>
            <input type={inpurtType} className=' text-sm text-secondary font-dmSans focus-visible:outline-none w-full' placeholder={inputPlaceholder} />
        </div>
    )
}

export default Input