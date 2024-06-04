import React from 'react'
import Flex from './Flex'
import MinText from './MinText'
import MinTitle from './MinTitle'
import Title from './Title'

const YourOrder = ({className}) => {
  return (
    <div className={`${className}`}>
        <Title title="Your Order"/>
        <div className="orderDetails mt-10 w-1/2">
            <Flex className=" py-2">
                <MinTitle text ="Product" className="w-1/2"/>
                <MinText text="Total" className="w-1/2"/>
            </Flex>
            <Flex className=" py-2">
                <MinTitle text ="Product name x 1" className="w-1/2"/>
                <MinText text="389.99 $" className="w-1/2"/>
            </Flex>
            <Flex className=" py-2">
                <MinTitle text ="Subtotal" className="w-1/2"/>
                <MinText text="389.99 $" className="w-1/2"/>
            </Flex>
            <Flex className=" py-2">
                <MinTitle text ="Total" className="w-1/2"/>
                <MinText text="389.99 $" className="w-1/2"/>
            </Flex>
        </div>
    </div>
  )
}

export default YourOrder