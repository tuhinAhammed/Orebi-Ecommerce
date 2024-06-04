import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import Flex from './Flex'

const ProductDescription = ({status , className , summary , decription}) => {
    const [showDes , setShowDes] = useState(status)
    const handleDescription = () => {
        setShowDes(!showDes)
    }
  return (
    <div className={`${className}`} onClick={handleDescription}>
        <Flex className="place-items-center gap-x-60 " >
        <div className="summary" >{summary}</div>
        <IoMdArrowDropdown />
        </Flex>
        {
            showDes &&
            <p className="des w-2/3 py-6 text-base text-secondary">
            {decription}
        </p>
        }


    </div>
  )
}

export default ProductDescription