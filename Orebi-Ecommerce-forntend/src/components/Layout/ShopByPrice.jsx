
import React, { useState } from 'react'
import Flex from "./Flex"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import MinTitle from "./MinTitle"
import CategoryDropdown from "./CategoryDropdown"

const ShopByPrice = ({ dropdown, title, children }) => {

    const [dropdownShow, setDropdownShow] = useState(dropdown)
    const [itemShow, setItemShow] = useState(false)
    const handleDropdown = () => {
        setItemShow(!itemShow)
    }
    return (
        <div className='list-none text-base text-secondary font-dm-Sans py-2'>
            {
                dropdownShow ?
                    <Flex className=" justify-between place-items-center">
                        <p className='text-base font-bold font-dmSans capitalize text-primary'>{title}</p>
                        <IoMdArrowDropdownCircle onClick={handleDropdown} className='cursor-pointer' />
                    </Flex>

                    : <p className='text-base font-bold font-dmSans capitalize text-primary'>{title}</p>

            }

            {
                itemShow && (
                    <ul className='mt-1'>
                        <li> <CategoryDropdown className="" title="100-300" /></li>
                        <li> <CategoryDropdown className="" title="500-1000" /> </li>
                        <li> <CategoryDropdown className="" title="1000- 10000" /> </li>
                        <li> <CategoryDropdown className="" title="200000-500000" /> </li>
                    </ul>
                )}
            {
                dropdownShow == false && (

                    <ul className='mt-1'>
                        <li> <CategoryDropdown className="" title="100-300" /></li>
                        <li> <CategoryDropdown className="" title="500-1000" /> </li>
                        <li> <CategoryDropdown className="" title="1000- 10000" /> </li>
                        <li> <CategoryDropdown className="" title="200000-500000" /> </li>
                    </ul>
                )}
        </div>
    )
}

export default ShopByPrice