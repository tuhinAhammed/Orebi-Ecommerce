import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import arrive1 from "../../assets/arrive-1.png"
import Title from '../Layout/Title'
import Badge from '../Layout/Badge'
import Product from '../Layout/Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
const NewArrivals = ({badge }) => {

  const [productData , setProductData] = useState([])
  // get Product from database
  useEffect(() => {
    async  function getProductData(){
          const data = await axios.get("http://localhost:4000/auth/v1/product/getproduct")
          console.log(data.data);
          setProductData(data.data);
      }
      getProductData()
  },[])
  console.log(productData);
  // react slick slider here
  // console.log(productData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="newArrived w-full">
        <Container className="py-16">
          {/* <h1 className='text-4xl font-bold pb-10'>New Arrivals</h1> */}
          <Title className="text-primary pb-10" title="New Arrivals"></Title>
          <div className="item w-[100%] mx-20" >

            <Slider {...settings} className="flex gap-x-6 ">
            {/* <Flex className=" "> */}
            {
              productData.map((product) => (
                <Product badge={true} productImage = {product.image} productPrice = {product.variants.map((variant) => (variant.price))} productColor= {product.variants.map((variant) => (variant.color))} productName ={product.name} className=""/>
              ))
            }

            {/* </Flex> */}

            </Slider>


          </div>
        </Container>
      </div>
    </>
  )
}

export default NewArrivals