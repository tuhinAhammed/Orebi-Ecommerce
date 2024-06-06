import React from 'react'
import { ImCross } from 'react-icons/im'

const AddToCart = ({ cartData }) => {
    return (
        <div>

            {
                cartData.map((cartItem) => (
                    <div className='py-2 '>
                                        <div className="flex justify-between items-center border border-queternary shadow-sm px-2 bg-tertiary mb-2">
                        <div className="product-img w-[80px] h-[80px]">
                            <img src={cartItem.image} alt="" />
                        </div>
                        <div className="product-details">
                            <h1 className='product-name text-base test-primary bold font-dmSans'>{cartItem.name}</h1>
                            <p className='product-name text-base test-primary bold font-dmSans'>{cartItem.price}</p>
                        </div>
                        <div className="cart-delete">
                            {
                                cartItem &&
                                < ImCross className="product-name text-base test-primary bold" />
                            }
                        </div>

                    </div>
                    <div className="button-List flex justify-between">
                            <button className='btn px-[40px] py-[16px] bg-transparent border-primary text-sm font-bold text-primary border'>View Cart</button>
                            <button className='btn px-[40px] py-[16px] bg-primary text-sm font-bold text-tertiary'>Checkout </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AddToCart