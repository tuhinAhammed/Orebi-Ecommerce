import React from 'react'
import Flex from './Flex'
import { FaStar } from "react-icons/fa";
const RatingCount = ({className , ratignCount}) => {
  return (
    <div className={`${className}`}>
        <Flex className="gap-20">
            <Flex className="text-[#FFD881]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Flex>
            <p className='text-sm text-secondary font-dmSans'>{ratignCount} Review</p>
        </Flex>
    </div>
  )
}

export default RatingCount