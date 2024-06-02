import React from 'react'
import BreadCrums from '../Layout/BreadCrums'
import Button from '../Layout/Button'
import CartLayout from '../Layout/CartLayout'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import MinText from '../Layout/MinText'
import MinTitle from '../Layout/MinTitle'

const Cart = () => {
  return (
    <div className='py-4'>
      <Container>
        <BreadCrums className="mt-6" />

        {/* cart header */}
        <div className="CartTitle  py-6 px-2 bg-quaternary">
          <Flex className="place-items-center  ">
            <MinTitle text="Product" className="text-sm capitalize w-[40%]" />
            <MinTitle text="Price" className="text-sm capitalize w-[15%]" />
            <MinTitle text="Quantity" className="text-sm capitalize w-[30%]" />
            <MinTitle text="Total" className="text-sm capitalize w-[15%]" />
          </Flex>
        </div>

        {/* cart body */}
        <div className="cartBody py-2">
          <CartLayout />
          <CartLayout />
        </div>

        {/* cart Footer */}
        <div className="cartFooter py-4 border px-2 bg-quaternary">
          <Flex className="place-items-center justify-between">
            <Flex className="place-items-center gap-6 w-1/2">
              <select name="" id="" className='border  w-1/3 px-2 py-2 text-secondary'>
                <option value="Size" selected>Size</option>
                <option value="Size" selected>Size</option>
                <option value="Size" selected>Size</option>
                <option value="Size" selected>Size</option>
              </select>
              <MinTitle text="Apply Cupon" className="capitalize text-sm"></MinTitle>
            </Flex>
            <MinTitle text="Update Cart" className="capitalize text-sm"></MinTitle>
          </Flex>
        </div>

        {/* scartTotals */}
        <div className="cartTotalsDiv relative flex justify-end py-6">
          <div className="cartTotals  p-4 w-1/3 bg-quaternary">
            <MinTitle text="Cart totals" className="capitalize text-sm text-right" />
            <div className="innerTotals py-2">
              <Flex className="justify-between place-items-center mt-2">
                <MinTitle text="Subtotal" className="capitalize text-sm" />
                <MinText text="$550.00"></MinText>
              </Flex>
              <Flex className="justify-between place-items-center mt-2">
                <MinTitle text="Total" className="capitalize text-sm" />
                <MinTitle text="$550.00"></MinTitle>
              </Flex>             
            </div>
        
          </div>
        </div>
      <div className="checkout flex justify-end py-6">
      <Button text="Proceed to Checkout" className=" px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary " />
      </div>
      </Container>
    </div>
  )
}

export default Cart