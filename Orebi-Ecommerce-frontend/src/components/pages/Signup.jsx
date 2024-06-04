import React from 'react'
import BreadCrums from '../Layout/BreadCrums'
import Button from '../Layout/Button'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import Input from '../Layout/Input'
import Line from '../Layout/Line'
import MinText from '../Layout/MinText'
import NewCustomer from '../Layout/NewCustomer'
import Title from '../Layout/Title'
import YourPrsonalDetails from '../Layout/YourPrsonalDetails'

const Signup = () => {
    return (
        <div>
            <Container>
                <BreadCrums className="py-6" />
                <MinText className="py-10 w-6/12" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."></MinText>
                <Line className="py-8" />
                <YourPrsonalDetails className="" />
                <Line className="py-8" />
                <NewCustomer className="" />
                <Line className="py-8" />
                <div className="parrword">
                    <Title title="Your Password"></Title>
                    <div className="loginForm  py-2 w-8/12">
                        <Flex className="py-4 gap-40">
                            <Input inputTitle="Password" inputPlaceholder="Password" inpurtType="password" className="border-b pb-2 " ></Input>
                            <Input inputTitle="Repeat Password" inputPlaceholder="Repeat Password" inpurtType="password" className="border-b pb-2 "></Input>
                        </Flex>
                    </div>
                </div>
                <Line className="py-8" />
                <Flex className="gap-6">
                    <input type="checkbox" />
                    <MinText text="I have read and agree to the Privacy Policy" />
                </Flex>
                <Flex className="gap-6 py-4">
                    <MinText text="Subscribe Newsletter" />
                    <Flex className="gap-4">
                        <input type="radio" name="name" />
                        <MinText text="Yes" />
                        <input type="radio" name="name" />
                        <MinText text="No" />
                    </Flex>
                </Flex>
                <Button text="Log in" className="my-6 px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary " />
            </Container>
        </div>
    )
}

export default Signup