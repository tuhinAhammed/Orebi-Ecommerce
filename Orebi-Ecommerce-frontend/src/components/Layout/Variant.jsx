import React, { useEffect } from 'react'

import Flex from './Flex'
import Button from "./Button"
import { useDispatch } from 'react-redux'
import {cartTotal} from "../../Slices/CartSlice"
const Variant = ({variantData , className}) => {

const {name , price , color , image} = variantData
const dispatch = useDispatch()
const handleAddCart = () => {
    dispatch(cartTotal(variantData))
    localStorage.setItem("cartStorage" , JSON.stringify(variantData))
}
console.log(price);
    return (
        <>
            <div className={`itemBox relative group w-full ${className}`}>

                <div className="productImage  w-[250px] h-[250px] flex justify-center">
                    <img src={image} alt="" className='w-full'/>
                </div>
                <Flex className="w-full justify-between py-3.5 place-items-center">
                    <h1 className='productName text-md text-dmSans font-bold'>{name}</h1>
                    <p className="productPrice text-secondary text-base">{price}</p>
                </Flex>
                <div className="productColor text-base text-secondary">{color}</div>
                <Button onClick={handleAddCart} text="Add to cart" className="pointer mt-2 px-20 text-tertiary bg-primary hover:bg-transparent hover:text-primary " />

            </div>
        </>
    )
}

export default Variant