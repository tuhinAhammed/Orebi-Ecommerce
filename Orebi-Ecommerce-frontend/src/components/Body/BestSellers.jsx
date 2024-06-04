import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import arrive1 from "../../assets/arrive-1.png"
import Title from '../Layout/Title'
import Badge from '../Layout/Badge'
import Product from '../Layout/Product'
const BestSelllers = (badge) => {
  return (
    <>
        <div className="newArrived w-[100%]">
        <Container className="py-16">
            {/* <h1 className='text-4xl font-bold pb-10'>New Arrivals</h1> */}
            <Title className="text-primary pb-10" title="Best Selllers"></Title>
            <div className="item">
                <Flex className="justify-beetween gap-10 ">
                    <Product badge = {false}></Product>
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                </Flex>
            </div>
        </Container>
        </div>
    </>
  )
}

export default BestSelllers