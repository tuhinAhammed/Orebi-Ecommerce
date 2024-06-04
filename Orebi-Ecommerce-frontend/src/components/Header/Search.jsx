import React from 'react'
import { IoSearch } from 'react-icons/io5'
import Flex from '../Layout/Flex'

const Search = ({className , placeholder}) => {
  return (
    <Flex className="place-items-center relative w-[500px] text-base font-dmSans rounded  bg-[#eee] " placeholder="Search Products">
        <input type="text" className={`w-full h-full px-[21px] py-[16px] bg-transparent rounded focus:outline-none focus-visible:ring ${className}`}  placeholder={placeholder} />
      <IoSearch className="absolute top-5 right-5 text-primary cursor-pointer" />
    </Flex>

  )
}

export default Search