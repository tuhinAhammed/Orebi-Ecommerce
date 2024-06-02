import React from 'react'
import { useState } from 'react'
import BreadCrums from '../Layout/BreadCrums'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import MinText from '../Layout/MinText'
import MinTitle from '../Layout/MinTitle'

const MyAccount = ({ className }) => {
    // const [showDashboard , setShowDashboard] = useState(true)
    // const handleDashbord = () => {
    //     showOthers(false)
    //     setShowDashboard(true)

    // }
    // const [showOthers , setShowOthers] = useState(false)
    // const handleOthers = () => {
    //     setShowDashboard("")
    //     setShowOthers(true)

    // }

    return (
        <div className={`pt-6 ${className}`}>
            <Container>
                <BreadCrums />
                <Flex className="dashboard w-full gap-40 py-10 ">
                    <div className="left">
                        <MinTitle className=" bold" text="Dashboard" />
                        <MinText className="mt-12" text="Others" />
                        <MinText className="mt-12" text="Addresses" />
                        <MinText className="mt-12" text="Account " />
                        <MinText className="mt-12" text="details " />
                        <MinText className="mt-12" text="Logout" />
                    </div>

                    <div className="right">
                        <MinText text="Hello admin (not admin? Log out)" />
                        <p className='text-base text-secondary font-dmSans mt-4'>From your account dashboard you can view your recent orders, manage your <a href="#" className="text-primary bold">shipping and billing addresses, and edit your password and account details.</a></p>
                    </div>

                </Flex>
            </Container>
        </div>
    )
}

export default MyAccount