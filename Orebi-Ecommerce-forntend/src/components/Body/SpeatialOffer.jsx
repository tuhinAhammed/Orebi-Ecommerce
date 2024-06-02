import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import Product from '../Layout/Product'
import Title from '../Layout/Title'

const SpeatialOffer = () => {
  return (
    <>
        <div className="speatialOffer py-[60px]">
            <Container>
                <Title title="Special Offers " className='py-8'></Title>
                <Flex className="justify-between gap-10">
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                    <Product badge = {true}></Product>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default SpeatialOffer