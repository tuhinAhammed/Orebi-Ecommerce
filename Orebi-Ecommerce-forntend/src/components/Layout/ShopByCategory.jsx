import React, { useState } from 'react'
import Flex from "./Flex"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import MinTitle from "./MinTitle"
import CategoryDropdown from "./CategoryDropdown"
import { useEffect } from 'react';
import axios from "axios"
const ShopByCategory = ({ dropdown, title, children }) => {

    const [dropdownShow, setDropdownShow] = useState(dropdown)
    const [itemShow, setItemShow] = useState(dropdown)
    const handleDropdown = () => {
        setItemShow(!itemShow)
    }

    // get categoryName from Database

    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        async function allCategory() {
            const data = await axios.get("http://localhost:4000/auth/v1/category/get/category")
            setCategoryData(data.data);
        }
        allCategory()
    }, [])

    return (

        <div className='list-none text-base text-secondary font-dm-Sans py-2 '>
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
                    <div className='mt-1 '>
                        {
                            categoryData.map((items) => (
                                <>
                                    <CategoryDropdown categoryDropdown={true} className="border-b-2 border-quaternary" title={items.name} >
                                        {
                                            items.subCategory.map((subCategoryName) => (

                                                <p className='border-t-2 border-quaternary ml-4 py-2'>{subCategoryName.name}</p>
                                            ))
                                        }
                                        {/* <p className='border-t-2 border-quaternary ml-4 py-2'>demo</p>
                                        <p className='border-t-2 border-quaternary ml-4 py-2'>demo</p> */}
                                    </CategoryDropdown>
                                </>
                            ))
                        }
                    </div>
                )}
            {
                dropdownShow == false && (
                    <div className='mt-1'>
                    {
                            categoryData.map((items) => (
                                <>
                                    <CategoryDropdown categoryDropdown={true} className="border-b-2 border-quaternary" title={items.name} >
                                        {
                                            items.subCategory.map((subCategoryName) => (

                                                <p className='border-t-2 border-quaternary ml-4 py-2'>{subCategoryName.name}</p>
                                            ))
                                        }
                                        {/* <p className='border-t-2 border-quaternary ml-4 py-2'>demo</p>
                                        <p className='border-t-2 border-quaternary ml-4 py-2'>demo</p> */}
                                    </CategoryDropdown>
                                </>
                            ))
                        }
                </div>
                )}
        </div>
    )
}

export default ShopByCategory