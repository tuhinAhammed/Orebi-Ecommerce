import React from 'react'
import Container from "../Layout/Container"
import BreadCrums from "../Layout/BreadCrums"
import MinTitle from '../Layout/MinTitle'
import Title from '../Layout/Title'
import Flex from '../Layout/Flex'
import Input from "../Layout/Input"
import Button from '../Layout/Button'
const Login = ({ className }) => {
    return (
        <div className={`${className}`}>
            <Container>
                <BreadCrums className="pt-6" />
                <MinTitle className="w-6/12 py-10 text-secondary text-base font-light capitalize" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></MinTitle>
                <Title title="Returning Customer" />
                <div className="loginForm w-6/12">
                    <Flex className="py-10 gap-40">
                        <Input inputTitle="Email address" inputPlaceholder="company@domain.com" inpurtType="email" className="border-b pb-2 w-6/12" ></Input>
                        <Input inputTitle="Password" inputPlaceholder="Your Password" inpurtType="password" className="border-b pb-2 w-6/12"></Input>
                    </Flex>
                    <Button text="Log in" className=" px-20 text-primary bg-transparent hover:bg-primary hover:text-tertiary " />
                </div>
                <div className="newCustomer py-20">
                    <Title title="New Customer" />
                    <MinTitle className="w-6/12 py-8 text-secondary text-base font-light capitalize" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></MinTitle>
                    <Button text="Continue" className=" px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary " />
                </div>
            </Container>
        </div>
    )
}

export default Login