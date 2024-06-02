import React from 'react'
import Flex from './Flex'
import MinTitle from './MinTitle'
import { CiCircleRemove } from "react-icons/ci"
import cartImg from "../../assets/cart.png"
import ProductCounter from "./ProductQuantity"
const CartLayout = ({ className }) => {
  return (
    <div className={` py-2 border  ${className}`}>
      <Flex className="place-items-center ">
        <Flex className='w-[40%] place-items-center gap-4 px-2'>
          <CiCircleRemove className='text-2xl' />
            <img src={cartImg} alt="" />
            <MinTitle text="Product name" className="CartName text-sm capitalize" />
        </Flex>
        <div className='w-[15%]'>
          <MinTitle text="$550.00" />
        </div>
        <div className='w-[30%]'>
        <ProductCounter />
        </div>
        <div className='w-[15%]'>
        <MinTitle className="totalPrice" text="$550.00" />
        </div>
      
      </Flex>
    </div>
  )
}

export default CartLayout