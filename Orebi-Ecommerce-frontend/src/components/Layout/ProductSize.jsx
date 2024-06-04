import React from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Flex from './Flex'
import MinTitle from './MinTitle'

const ProductSize = ({className}) => {
  return (
    <div className ={`${className}`}>
        <Flex className="gap-10 place-items-center">
        <MinTitle className="uppercase text-base" text="Size :"></MinTitle>
            <Flex className=" place-items-center gap-20 px-6 py-2 border-2 text-secondary">
                <p className="SizeShort">S</p>
                <div className="icon">
                <IoMdArrowDropdownCircle/>
                </div>
            </Flex>
        </Flex>
    </div>
  )
}

export default ProductSize