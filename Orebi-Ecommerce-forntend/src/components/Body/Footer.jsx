
import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import MinTitle from '../Layout/MinTitle'
import Logo from "../../assets/Logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="footer py-12 text-primary bg-quaternary">
                <Container className="">
                    <Flex className="justify-between gap-32 ">
                        <div className="menu">
                            <MinTitle className="pb-4" text="Menu"></MinTitle>
                            <ul>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Home</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Shop</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">About</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Contact</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Journal</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <MinTitle className="pb-4" text="Shop"></MinTitle>
                            <ul>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Category 1</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Category 2</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Category 3</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Category 4</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Category 5</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <MinTitle className="pb-4" text="HELP"></MinTitle>
                            <ul>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Special E-shop</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Shipping</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">Secure Payments</a>
                                </li>
                            </ul>
                        </div>


                        <div className="contact">
                            <ul>
                                <li className='text-base text-primary font-dmSans py-2 '>
                                    <a href="#">(052) 611-5711</a>
                                </li>
                                <li className='text-base text-primary font-dmSans py-2 '>
                                    <a href="#">company@domain.com</a>
                                </li>
                                <li className='text-sm text-secondary font-dmSans py-2 cursor-pointer'>
                                    <a href="#">575 Crescent Ave. Quakertown, PA 18951</a>
                                </li>
                            </ul>
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        </Flex>
                        <div className="lastFooter pt-14">
                            <Flex className = "justify-between ">
                                <div className="social">
                                    <Flex className="gap-2">
                                        <a href="https://www.facebook.com/mdtuhin.ahammed.121"><FaFacebookF /></a>
                                        <a href="https://www.linkedin.com/in/tuhin-ahammed-782399201/"><FaLinkedinIn /></a>
                                        <a href="https://www.linkedin.com/in/tuhin-ahammed-782399201/"><FaInstagram /></a>
                                    </Flex>
                                </div>
                                <div className="copyRight text-sm">
                                    <MinTitle className="text-secondary capitalize font-light" text="2024 Orebi Minimal eCommerce Website by Tuhin Ahammed shuvo"></MinTitle>
                                </div>
                            </Flex>
                        </div>
                </Container>
            </div>
        </>
    )
}

export default Footer