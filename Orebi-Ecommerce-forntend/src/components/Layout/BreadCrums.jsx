import React from 'react'
import Flex from '../Layout/Flex'
import MinTitle from '../Layout/MinTitle'
import Title from '../Layout/Title'
import { MdOutlineArrowForwardIos } from "react-icons/md";
const BreadCrums = ({className}) => {
    const pageName = window.location.pathname.split("/")[1]

    return (
        <div className={`${className}`}>
            <Title className="capitalize" title={pageName}></Title>
            <Flex className="pageIntregate py-6 text-sm text-secondary font-light gap-3 items-center" >
                <MinTitle text="Home" className="text-sm text-secondary font-light lowercase"></MinTitle>
                <MdOutlineArrowForwardIos className="text-sm text-secondary font-light" />
                <MinTitle text={pageName} className="text-sm text-secondary font-light lowercase"></MinTitle>

            </Flex>
        </div>
    )
}

export default BreadCrums