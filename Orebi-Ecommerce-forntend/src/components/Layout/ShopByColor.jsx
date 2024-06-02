import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Flex from "./Flex"
import CategoryDropdown from "./CategoryDropdown"
const LeftSidebarContentColor = ({title , dropdown }) => {
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
                    <li >
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-primary rounded-full '></div>
                            <a href=""><CategoryDropdown title="Black" className="border-none" /></a>
                        </Flex>
                    </li>
                    <li>
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-[orange] rounded-full '></div>
                            <a href=""><CategoryDropdown title="Orange" className="border-none"  /></a>
                        </Flex>
                    </li>
                    <li>
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-[green] rounded-full '></div>
                            <a href=""><CategoryDropdown title="Green" className="border-none" /></a>
                        </Flex>
                    </li>
                    <li>
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-[red] rounded-full '></div>
                            <a href=""><CategoryDropdown title="Red" className="border-none" /></a>
                        </Flex>
                    </li>

                </ul>
            )
        }

        {/* If DropDown False */}

        {
            dropdownArrowShow == false && (
                <ul className='mt-1'>
                    <li >
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-primary rounded-full '></div>
                            <a href=""><CategoryDropdown title="Black" className="border-none" /></a>
                        </Flex>
                    </li>
                    <li>
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-[orange] rounded-full '></div>
                            <a href=""><CategoryDropdown title="Orange" className="border-none"  /></a>
                        </Flex>
                    </li>
                    <li>
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-[green] rounded-full '></div>
                            <a href=""><CategoryDropdown title="Green" className="border-none" /></a>
                        </Flex>
                    </li>
                    <li>
                        <Flex className="place-items-center ml-4 border-b-2 border-quaternary">
                            <div className='w-[15px] h-[15px] bg-[red] rounded-full '></div>
                            <a href=""><CategoryDropdown title="Red" className="border-none" /></a>
                        </Flex>
                    </li>

                </ul>
            )
        }
    </div>
  )
}

export default LeftSidebarContentColor