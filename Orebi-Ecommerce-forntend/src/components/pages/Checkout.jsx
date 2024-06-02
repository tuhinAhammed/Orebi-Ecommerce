
import React from 'react'
import BreadCrums from '../Layout/BreadCrums'
import Button from '../Layout/Button'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import Input from '../Layout/Input'
import MinText from '../Layout/MinText'
import MinTitle from '../Layout/MinTitle'
import Title from '../Layout/Title'
import YourOrder from '../Layout/YourOrder'

const Checkout = () => {
    return (
        <div className='py-6'>
            <Container>
                <BreadCrums />
                <p className='text-primary'><span className="text-secondary">Have a coupon? </span>Click here to enter your code</p>
                <Title title="Billing Details" className="mt-10"/>

                <div className="loginForm  py-2 w-8/12">
                    <Flex className="py-4 gap-10">
                        <Input inputTitle="First Name *" inputPlaceholder="First Name" inpurtType="text" className="border-b pb-2 w-1/2" ></Input>
                        <Input inputTitle="Last Name *" inputPlaceholder="Last Name " inpurtType="text" className="border-b pb-2 w-1/2"></Input>
                    </Flex>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="Companye Name (optional)" inputPlaceholder="Company Name" inpurtType="text" className=""></Input>
                    </form>
                    <div className="division w-6/12 border-b  w-6/12 py-4 mt-2">
                        <p className="text-base text-primary font-dmSans font-bold ">Division</p>
                        <select aria-placeholder='Slecet' className='w-full text-sm text-secondary font-dmSans focus-visible:outline-none ml-[-3px]'>
                            <option value="Please Select" className='text-secondary'>Please Select</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="jessore">jessore</option>
                        </select>
                    </div>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="Street Address *" inputPlaceholder="House number and street name" inpurtType="text" className=""></Input>
                    </form>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="Address 2" inputPlaceholder="Address 2" inpurtType="text" className=""></Input>
                    </form>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="Town/City *" inputPlaceholder="Town/City" inpurtType="text" className=""></Input>
                    </form>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="County (optional)" inputPlaceholder="County (optional)" inpurtType="text" className=""></Input>
                    </form>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="Post Code *" inputPlaceholder="Post Code ** ** **" inpurtType="text" className=""></Input>
                    </form>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="Phone *" inputPlaceholder="Phone" inpurtType="number" className=""></Input>
                    </form>
                    <form className='border-b w-1/2 py-4 mt-2'>
                        <Input inputTitle="Email Address *" inputPlaceholder="Email Address *" inpurtType="texts" className=""></Input>
                    </form>
                </div>

                <div className="additionial py-10">
                    <Title title="Additional Information" />
                    <MinTitle text="Other Notes (optional)" className="py-4" />
                    <MinText text="Notes about your order, e.g. special notes for delivery." />
                </div>
                <YourOrder className="py-6"/>
      <Button text="Proceed to Checkout" className=" px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary " />

            </Container>
        </div>
    )
}

export default Checkout