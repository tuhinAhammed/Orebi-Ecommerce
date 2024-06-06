import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Container from '../Layout/Container'
import Search from "./Search"
import Flex from "../Layout/Flex"
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import productImg from "../../assets/productImg.png"
import { useSelector } from 'react-redux';
import AddToCart from '../Layout/AddToCart';


const Header = () => {
    // fetch redux data for cart
    const cartData = useSelector(state => state.cartDetails.value)
    console.log(cartData);
    const [show, setShow] = useState(false)
    const [myAccountShow, setMyAccountShow] = useState(false)
    const [cartShow, setCartShow] = useState(false)
    // const handleClick = () => {
    //     setShow (!show)
    // }

    const myRef = useRef()
    const loginRef = useRef()
    const cartRef = useRef()

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (myRef.current.contains(e.target)) {
                setShow(true)
            }
            else {
                setShow(false)
            }
            if (loginRef.current.contains(e.target)) {
                setMyAccountShow(true)
            }
            else {
                setMyAccountShow(false)
            }
            if (cartRef.current.contains(e.target)) {
                setCartShow(true)
            }
            else {
                setCartShow(false)
            }
        })
    }, [])
    return (
        <div className='bg-[#F5F5F3]'>
            <Container className="py-4">
                <Flex className="justify-between items-center" >
                    <div className='flex items-center gap-[10px] text-sm font-dmSans '>
                        <div className='relative cursor-pointer' ref={myRef} >
                            <div className='flex items-center gap-[10px] text-sm font-dmSans'>
                                <RiBarChartHorizontalFill />
                                <div className='text-primary text-base'>Shop by Category</div>
                            </div>
                            {
                                show && (
                                    <ul className='absolute bg-primary top-[50px] w-[263px] font-dmSans' >
                                        <li className='cursor-pointer cursor-pointer text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Accesories</li>
                                        <li className='cursor-pointer text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Furniture</li>
                                        <li className='cursor-pointer text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Electronics</li>
                                        <li className='cursor-pointer text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Clothes</li>
                                        <li className='cursor-pointer text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Bags</li>
                                        <li className='cursor-pointer text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary text-opacity-[70%] hover:text-tertiary hover:bold hover:pl-[30px] hover:text-opacity-[100%]'>Home appliances</li>
                                    </ul>
                                )
                            }
                        </div>


                    </div>

                    <Search className="w-[500px] text-base font-dmSans rounded px-[21px] py-[16px] bg-[#eee] " placeholder="Search Products"></Search>

                    <div className='flex gap-[40px] items-center text-sm font-dmSans'>
                        <div className='flex relative cursor-pointer' ref={loginRef}>
                            <FaUser className='text-[18px]' />
                            <TiArrowSortedDown />

                            {
                                myAccountShow && (
                                    <ul className='absolute bg-primary right-0 top-[50px] text-center w-[200px] font-dmSans' >
                                        <li className='cursor-pointer text-base py-[16px]  px-[21px]  border-b border-secondary ease-in duration-100 text-tertiary  '>My Account</li>
                                        <li className='cursor-pointer bg-secondary text-base py-[16px]  px-[21px]  border-b border-secondary  text-tertiary  '>Log Out</li>
                                    </ul>
                                )
                            }

                        </div >
                        <div className=' relative' ref={cartRef}>
                            <FaCartShopping className='text-[18px] cursor-pointer' />
                            {
                                cartShow &&
                                (
                                    <div className=" w-[358px] p-[21px] bg-quaternary main-cart absolute right-0 top-[50px] z-50  ">
                                        {
                                            cartData ? <AddToCart cartData={cartData} /> : "Empty Cart"
                                        }
                                        <div className="total-price pt-[34px] pb-[13px]">
                                            <p className='text-base'>Subtotal: <span className='font-bold'>$44.00</span></p>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Header