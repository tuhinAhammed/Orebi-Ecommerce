import React from 'react'
import Button from './Button'
import ContactForm from './ContactForm'
import MinTitle from './MinTitle'

const AddReview = ({className}) => {
  return (
    <div className={`${className}`}>
        <ContactForm ContactTitle = "Add a Review"/>
    </div>
  )
}

export default AddReview