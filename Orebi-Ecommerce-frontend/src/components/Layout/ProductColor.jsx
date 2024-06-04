import React from 'react'
import Flex from './Flex'
import MinTitle from './MinTitle'

const ProductColor = ({className}) => {
  return (
    <div className={`${className}`}>
        <Flex className="gap-10 place-items-center">
            <MinTitle className="uppercase text-base" text="Color :"></MinTitle>
            <Flex className="place-items-center gap-2 p-4">
                <div className=' bg-[orange]  w-[20px] h-[20px] rounded-full hover:p-4'></div>
                <div className=' bg-[red]  w-[20px] h-[20px] rounded-full hover:p-4'></div>
                <div className=' bg-[green]  w-[20px] h-[20px] rounded-full hover:p-4'></div>
                <div className=' bg-[yellow]  w-[20px] h-[20px] rounded-full hover:p-4'></div>
                <div className=' bg-[tomato]  w-[20px] h-[20px] rounded-full hover:p-4'></div>
            </Flex>
        </Flex>
    </div>
  )
}

export default ProductColor