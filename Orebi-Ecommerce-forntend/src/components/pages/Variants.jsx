import React, { useEffect , useState } from 'react'
import Badge from '../Layout/Badge'
import arrive1 from "../../assets/arrive-1.png"
import Flex from '../Layout/Flex'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Variant from '../Layout/Variant';
import Container from '../Layout/Container';

const Variants = ({className }) => {

    const [productData, setProductData] = useState([])
    const {productId} = useParams();


        useEffect(() => {
            async function fetchProduct() {
                const data = await axios.get("http://localhost:4000/auth/v1/product/getproduct")
                setProductData(data.data);
            }
            fetchProduct()
        },[productData])

// find Product variant
        const variantItem = productData.find((item) => item._id == productId )

    return (
        <>
         
            <Container>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 ${className} flex`}>
                {
                    variantItem?.variants.map((item) => (
                        <Variant className="" variantData ={item}/>
                    ))

                }
                
            </div>
            </Container>
        </>
    )
}

export default Variants