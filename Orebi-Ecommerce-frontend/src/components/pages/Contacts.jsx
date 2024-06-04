import React from 'react'
import BreadCrums from '../Layout/BreadCrums'
import Button from '../Layout/Button'
import ContactForm from '../Layout/ContactForm'
import Container from '../Layout/Container'
import Input from '../Layout/Input'
import MinTitle from '../Layout/MinTitle'

const Contact = ({className}) => {
  return (
    <div className={`${className}`}>
      <Container>
        <BreadCrums className="py-6" />

            <MinTitle text="Fill up a Form" />
            <form className='border-b-2 w-3/12 py-4'>
                <Input inputTitle="Name" inputPlaceholder="Your name here" inpurtType="text"></Input>
            </form>
            <form className='border-b-2 w-3/12 py-4'>
                <Input inputTitle="Email" inputPlaceholder='Your email here' inpurtType="text"></Input>

            </form>
            <form className='border-b-2 w-3/12 py-4'>
                <Input inputTitle="Message" inputPlaceholder="Your Message here" inpurtType="text"></Input>

            </form>
            <Button text="Post" className="mt-10 px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary " />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318784571!2d90.33728773100648!3d23.780975728736458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1715363589900!5m2!1sen!2sbd" className='w-full py-16' width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </div>
  )
}

export default Contact