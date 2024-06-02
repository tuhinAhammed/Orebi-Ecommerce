import React from 'react'
import { IoSearch } from "react-icons/io5";
import Search from '../Header/Search'
import BreadCrums from '../Layout/BreadCrums'
import Button from '../Layout/Button';
import Container from '../Layout/Container'
import MinText from '../Layout/MinText'
import Title from '../Layout/Title'

const Error = () => {
  return (
    <div className='py-10'>
        <Container>
            <Title title="404" className="text-[100px] py-10"/>
            <MinText text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?" className="w-1/2 py-6"/>
                
                        <Search className="" placeholder="Back to Home"></Search>
                       
      <Button text="Proceed to Checkout" className=" px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary my-10" />

        </Container>
    </div>
  )
}

export default Error