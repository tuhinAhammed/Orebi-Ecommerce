import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import ads1 from "../../assets/Ad_1.png"
import ads2 from "../../assets/Ad_2.png"
import ads3 from "../../assets/Ad_3.png"
const Ads = () => {
  return (
    <>
      <div className="add w-full">
      <Container className="pt-[120px] pb-[60px]">
        <Flex className="justify-between">
          <div  className='left '>
            <img  src={ads1} alt="" className=''/>
          </div>
          <div className='right'>
          <img  src={ads2} alt="" className=''/>
          <img  src={ads3} alt="" className='pt-[30px]'/>
          </div>
        </Flex>
      </Container>
      </div>
    </>
  )
}

export default Ads