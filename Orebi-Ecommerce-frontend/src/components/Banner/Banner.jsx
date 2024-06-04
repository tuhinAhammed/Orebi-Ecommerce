import React from 'react'
import BannerImg from "../../assets/banner.png"
import Flex from '../Layout/Flex'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import  Container  from '../Layout/Container';
const Banner = () => {
  return (
    <div className='w-full'>
        <img className='w-full' src={BannerImg} alt="" />
    <div className="bg-quaternary ">
    <Container >
        <Flex className="information justify-between items-center py-[20px] ]">
          <div className='flex justify-center gap-[17px] items-center'>
            <h2 className='font-bold text-[22px]'>2</h2>
            <p className='text-secondary text-base'>Two years warranty</p>
          </div>
          <div className='flex justify-center gap-[17px] items-center'>
            <div className='text-[22px]'>
              <TbTruckDelivery/>
            </div>
            <p className='text-secondary text-base'>Free shipping</p>
          </div>
          <div className='flex justify-center gap-[17px] items-center'>
            <div className='text-[22px]'>
              <GiReturnArrow/>
            </div>
            <p className='text-secondary text-base'>Return policy in 30 days</p>
          </div>

        </Flex>
        </Container>
    </div>

    </div>
  )
}

export default Banner