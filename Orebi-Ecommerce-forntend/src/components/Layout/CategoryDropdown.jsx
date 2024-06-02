import React, { Children, useEffect } from 'react'
import { useState } from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Flex from '../Layout/Flex'
// import SubCategoryDropdown from './SubCategoryDropdown'
import axios from "axios"

const CategoryDropdown = ({ categoryDropdown, className, children, title, color }) => {

    const [categoryDropdownShow, setCategoryDropdownShow] = useState(false)
    const [categoryArrowShow, setyCategoryAroowShow] = useState(categoryDropdown)
    return (
        <div className={`py-2 ml-4 cursor-pointer text-secondary ${className}`}>
            {
                categoryArrowShow ?
                    <Flex className="justify-between place-items-center  text-base ">
                        <p className="categoryName" style={{ color: color }} >{title}</p>
                        <IoMdArrowDropdownCircle onClick={() => setCategoryDropdownShow(!categoryDropdownShow)} className='cursor-pointer ' />
                    </Flex>
                    :
                    <p className="categoryName ">{title}</p>

            }

            {
                categoryDropdownShow &&
                <div className='mt-2'>
                    {children}
                </div>
            }

        </div>

    )
}

export default CategoryDropdown