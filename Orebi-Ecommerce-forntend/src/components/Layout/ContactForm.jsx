import React from 'react'
import Button from './Button'
import Input from './Input'
import MinTitle from './MinTitle'

const ContactForm = ({ ContactTitle , className }) => {
    return (
        <div className={`${className}`}>
            <MinTitle text={ContactTitle} />
            <form className='border-b-2 w-3/12 py-4'>
                <Input inputTitle="Name" inputPlaceholder="Your name here" inpurtType="text"></Input>
            </form>
            <form className='border-b-2 w-3/12 py-4'>
                <Input inputTitle="Email" inputPlaceholder='Your email here' inpurtType="text"></Input>

            </form>
            <form className='border-b-2 w-3/12 py-4'>
                <Input inputTitle="Review" inputPlaceholder="Your review here" inpurtType="text"></Input>

            </form>
            <Button text="Post" className="mt-10 px-20 text-tertiary bg-primary" />
        </div>
    )
}

export default ContactForm