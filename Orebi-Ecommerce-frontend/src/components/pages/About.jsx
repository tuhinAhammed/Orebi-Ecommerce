import React from 'react'
import BreadCrums from '../Layout/BreadCrums'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import about1 from "../../assets/about-1.png"
import about2 from "../../assets/about-2.png"
import Button from '../Layout/Button'
import MinTitle from '../Layout/MinTitle'
import OurVision from '../Layout/OurVision'
const About = () => {
    return (
        <div>
            <Container>
                <BreadCrums className="py-10" />
                <Flex className="productImage w-3/4 flex-wrap pb-14 justify-center place-content-center mx-auto">
                    <div className="card text-center w-1/2">
                        <img src={about1} className="w-full" alt="" />
                        <Button text="Our Brands" className="px-20 bg-primary text-tertiary" />
                    </div>
                    <div className="card text-center w-1/2">
                        <img src={about2} className="w-full" alt="" />
                        <Button text="Our Brands" className="px-20 bg-primary text-tertiary" />
                    </div>
                </Flex>
                <p className="py-6 text-secondary light font-dmSans w-1/2">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                
                <Flex className= "py-6 justify-between place-items-center gap-6">
                <OurVision cardTitle ="Our Vision" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                <OurVision cardTitle ="Our Story" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                <OurVision cardTitle ="Our Brands" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                </Flex>
                
            </Container>
        </div>
    )
}

export default About