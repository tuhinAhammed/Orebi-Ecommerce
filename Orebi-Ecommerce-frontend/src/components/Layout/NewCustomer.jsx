import React from 'react'
import Button from './Button'
import Flex from './Flex'
import Input from './Input'
import MinTitle from './MinTitle'
import Title from './Title'
const NewCustomer = ({ className }) => {
    return (
        <div className={`${className}`}>
            <Title title="New Customer"></Title>
            <div className="loginForm  py-2 w-8/12">
                <Flex className="py-4 gap-40">
                    <Input inputTitle="Address 1" inputPlaceholder="Place Your Address" inpurtType="text" className="border-b pb-2 " ></Input>
                    <Input inputTitle="Address 2" inputPlaceholder="Place Your Address" inpurtType="text" className="border-b pb-2 "></Input>
                </Flex>
                <Flex className="py-4 gap-40">
                    <Input inputTitle="City" inputPlaceholder="Your city" inpurtType="email" className="border-b pb-2 w-6/12" ></Input>
                    <Input inputTitle="Post Code" inputPlaceholder="00--00--00" inpurtType="number" className="border-b pb-2 w-6/12"></Input>
                </Flex>
                <Flex className="py-4 gap-40 ">
                    <div className="division w-6/12 border-b pb-2 w-6/12">
                        <p className="text-base text-primary font-dmSans font-bold">Division</p>
                        <select aria-placeholder='Slecet' className='w-full text-sm text-secondary font-dmSans focus-visible:outline-none ml-[-3px]'>
                            <option value="Please Select" className='text-secondary'>Please Select</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="jessore">jessore</option>
                        </select>
                    </div>
                    <div className="District w-6/12 border-b pb-2 w-6/12">
                        <p className="text-base text-primary font-dmSans font-bold">Division</p>
                        <select aria-placeholder='Slecet' className='w-full text-sm text-secondary font-dmSans focus-visible:outline-none ml-[-3px]'>
                            <option value="Please Select" className='text-secondary'>Please Select</option>
                            <option value="jessore">jessore</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="jessore">jessore</option>
                            <option value="jessore">jessore</option>
                        </select>
                    </div>
                </Flex>

            </div>
        </div>
    )
}

export default NewCustomer