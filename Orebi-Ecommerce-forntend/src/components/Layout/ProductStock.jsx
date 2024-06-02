import React, { useState } from 'react'
import Flex from './Flex'
import MinTitle from './MinTitle'

const ProductStock = ({className}) => {
    const [count , setCount ] = useState(1)
    const incrementHandle = () => {
        setCount(count + 1) 
    }
    const decrementHandle = () => {
        setCount(count - 1)
        if (count < 1){
            setCount(0)
        }
        
    }

  return (
    <div className ={`${className}`}>
    <Flex className="gap-10 place-items-center">
    <MinTitle className="uppercase text-base" text="STATUS :"></MinTitle>
        <p className="stock text-lg text-secondary font-dmSans">In stock</p>
    </Flex>
</div>
  )
}

export default ProductStock
