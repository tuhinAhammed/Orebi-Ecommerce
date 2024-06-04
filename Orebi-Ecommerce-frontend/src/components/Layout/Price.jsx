import React from 'react'
import Flex from './Flex'

const Price = ({className}) => {
  return (
    <div className={`${className}`}>
        <Flex className="gap-x-10 place-items-center">
            <del className="discoundPrice line-through text-secondary text-lg">$100</del>
            <div className="mainPrice text-xxl text-primary">$80</div>
        </Flex>
    </div>
  )
}

export default Price