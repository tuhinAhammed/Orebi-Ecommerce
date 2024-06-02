import React from 'react'
import Button from './Button'
import Flex from './Flex'
import Input from './Input'
import MinTitle from './MinTitle'
import Title from './Title'

const YourPrsonalDetails = ({className}) => {
    return (
        <div className={`${className}`}>
            <Title title = "Your Personal Details"></Title>
            <div className="loginForm w-8/12 py-2">
                <Flex className="py-4 gap-40">
                    <Input inputTitle="First Name" inputPlaceholder="First Name" inpurtType="text" className="border-b pb-2 w-6/12" ></Input>
                    <Input inputTitle="Last Name" inputPlaceholder="Last Name" inpurtType="text" className="border-b pb-2 w-6/12"></Input>
                </Flex>
                <Flex className="py-4 gap-40">
                    <Input inputTitle="Email address" inputPlaceholder="company@domain.com" inpurtType="email" className="border-b pb-2 w-6/12" ></Input>
                    <Input inputTitle="Telephone" inputPlaceholder="Your phone number" inpurtType="number" className="border-b pb-2 w-6/12"></Input>
                </Flex>
                
            </div>
        </div>
    )
}

export default YourPrsonalDetails