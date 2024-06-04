import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import adsSecond from "../../assets/adsSecond.png"
import Button from '../Layout/Button'
import Title from '../Layout/Title'
const AdsSeconsd = () => {
  return (
    <>
        <div className="adsSecond py-[60px] ">
            <Container>
                <Flex className="justify-between">
                    <div className="left">
                        <img src={adsSecond} alt="" />
                    </div>
                    <div className="right py-10">
                        <Title title ="Phone of the year"></Title>
                        
                        <p className='text-base py-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                        {/* <Button text="Shop Now" className=""></Button> */}
                        <Button text="Shop Now" className=" px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary " />
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default AdsSeconsd