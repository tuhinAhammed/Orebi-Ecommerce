import React from 'react'
import BreadCrums from '../Layout/BreadCrums'
import Container from '../Layout/Container'
import image1 from "../../assets/Image_4.png"
import image2 from "../../assets/Image_2.png"
import image3 from "../../assets/Image_3.png"
import image4 from "../../assets/Image_4.png"
import Flex from '../Layout/Flex'
import Title from '../Layout/Title'
import RatingCount from '../Layout/RatingCount'
import Price from '../Layout/Price'
import ProductColor from '../Layout/ProductColor'
import ProductSize from '../Layout/ProductSize'
import ProductQuantity from '../Layout/ProductQuantity'
import ProductStock from '../Layout/ProductStock'
import Button from '../Layout/Button'
import ProductDescription from '../Layout/ProductDescription'
import ProductReview from './ProductReview'
import AddReview from '../Layout/AddReview'
import MinTitle from '../Layout/MinTitle'
const ProductInside = () => {
    return (
        <>
            <div className="product w-full">
                <Container>
                    <BreadCrums className="py-10 " />
                    <Flex className="productImage flex-wrap pb-14 w-3/4 m-auto">
                        <img src={image1} className="w-1/2" alt="" />
                        <img src={image2} className="w-1/2" alt="" />
                        <img src={image3} className="w-1/2" alt="" />
                        <img src={image4} className="w-1/2" alt="" />
                    </Flex>
                    <Title title="Product" />
                    <RatingCount className="py-6" ratignCount="1" />
                    <Price />
                    <ProductColor className="py-6" />
                    <ProductSize />
                    <Flex className="place-items-center gap-x-10">
                        <MinTitle text="Quantity :"></MinTitle>
                        <ProductQuantity className="py-6" />
                    </Flex>
                    <ProductStock />
                    <Flex className="py-6 gap-x-10">
                        <Button text="Add to Wish List" className="px-10 text-primary bg-transparent hover:bg-primary hover:text-tertiary "></Button>
                        <Button text="Add to Cart" className="px-10 text-tertiary bg-primary hover:bg-transparent hover:text-primary"></Button>
                    </Flex>
                    <ProductDescription status={false} summary="FEATURES  & DETAILS" decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." className="py-6" />
                    <ProductDescription status={true} summary="SHIPPING & RETURNS" decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." className="" />
                    <ProductReview className="py-6" count="1" />
                    <AddReview className="py-10" />
                </Container>
            </div>

        </>
    )
}

export default ProductInside