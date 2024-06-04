import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Flex from "./Flex"
import CategoryDropdown from "./CategoryDropdown"
const ShopByBrand = ({title , dropdown }) => {
    // color Dropdown Show State
    const [showColorDropdown , setShowColorDropdown] = useState(false)
    const [dropdownArrowShow , setDropdownArrowShow] = useState(dropdown)
  return (
    <div className='list-none text-base text-secondary font-dm-Sans py-2'>
{        dropdownArrowShow ? 
        <Flex className="justify-between place-items-center">
            <p className='text-base font-bold font-dmSans capitalize text-primary'>{title}</p>
            <IoMdArrowDropdownCircle  className='cursor-pointer' onClick={() => setShowColorDropdown(!showColorDropdown)} />
        </Flex>
        :
        <Flex className="justify-between place-items-center">
        <p className='text-base font-bold font-dmSans capitalize text-primary'>{title}</p>
        
    </Flex>
        }
        {
            showColorDropdown && (
                <ul className='mt-1'>
                    <li className=''>
                        <a href=""><CategoryDropdown title="Brand-1" className=" " /></a>
                    </li>
                    <li >
                        <a href=""><CategoryDropdown title="Brand-2" className="" /></a>
                    </li>
                    <li >
                        <a href=""><CategoryDropdown title="Brand-3" className="" /></a>
                    </li>
                    <li >
                        <a href=""><CategoryDropdown title="Brand-4" className="" /></a>
                    </li>
                </ul>
            )
        }

        {/* If DropDown False */}

        {
            dropdownArrowShow == false && (
                <ul className='mt-1'>
                    <li className=''>
                        <a href=""><CategoryDropdown title="Brand-1" className=" " /></a>
                    </li>
                    <li >
                        <a href=""><CategoryDropdown title="Brand-2" className="" /></a>
                    </li>
                    <li >
                        <a href=""><CategoryDropdown title="Brand-3" className="" /></a>
                    </li>
                    <li >
                        <a href=""><CategoryDropdown title="Brand-4" className="" /></a>
                    </li>
                </ul>
            )
        }
    </div>
  )
}

export default ShopByBrand