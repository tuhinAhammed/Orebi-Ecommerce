import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import MinTitle from '../Layout/MinTitle'
import Title from '../Layout/Title'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import BreadCrums from '../Layout/BreadCrums'
import Pagination from '../Layout/Pagination'
import { useState } from 'react'
import { useEffect } from 'react'
import LeftSidebar from '../Layout/LeftSidebar'
const Shop = () => {
    // url name Splited Here
    const pageName = window.location.pathname.split("/")[1]
    console.log(pageName);

    // product SHORT BY handleShort
    const [productShow, setProductShow] = useState(12)

    useEffect(() => {

    }, [productShow])

    const handleShort = (e) => {
        setProductShow(+e.target.value);
    }

    return (

        <>
            <div className="breadcrums py-6">
                <Container>


                    <div className="innerShop pt-6 ">
                        <Flex className="gap-10">
                            <div className="left w-[25%]">
                                <BreadCrums></BreadCrums>
                                <LeftSidebar></LeftSidebar>
                            </div>
                            <div className="right w-[75%]">
                                <Flex className="justify-end gap-x-20 pb-14">
                                    <Flex className="place-items-center gap-x-8">
                                        <p for="countries" className="text-base font-dmSans text-secondary dark:text-secondaery">Sort by</p>
                                        <select id="countries" className="bg-quaternary border  text-secondary text-base rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Featured</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </Flex>
                                    <Flex className="place-items-center gap-x-8">
                                        <p for="countries" className="text-base font-dmSans text-secondary dark:text-secondaery">Show:</p>
                                        <select id="countries" className="bg-quaternary border text-secondary text-base rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleShort}>
                                            <option selected>12</option>
                                            <option value="24">24</option>
                                            <option value="36">36</option>
                                            <option value="48">48</option>
                                            <option value="60">60</option>
                                        </select>
                                    </Flex>
                                </Flex>
                                <Pagination itemsPerPage={productShow}></Pagination>
                            </div>
                        </Flex>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Shop