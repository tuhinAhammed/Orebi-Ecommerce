import React, { useState } from 'react'
import Flex from './Flex'
import MinTitle from './MinTitle'

const ProductQuantity = ({className}) => {
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
        <Flex className=" place-items-center gap-20 px-6 py-2 border-2 text-secondary text-lg">
            <p className="decrement cursor-pointer" onClick={decrementHandle}>-</p>
            <div className="count">{count}</div>
            <p className="intrement cursor-pointer" onClick={incrementHandle}>+</p>
        </Flex>
    </Flex>
</div>
  )
}

export default ProductQuantity