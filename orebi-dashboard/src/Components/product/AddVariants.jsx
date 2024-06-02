import React, { useState } from 'react';
import {
    Button,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    Form,
    Image, 
    Input,
    Select,
    Card,
    InputNumber,
    Radio,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
const { TextArea } = Input;

// Imaage upload



const AddVariants = () => {

// Upload Image Part Start Here


//State for input OnChange
const [variantInputData , setVariantInputData] = useState({
    name : "" ,
    description : "" ,
    size : "" ,
    ram : "" ,
    rom : "" ,
    storage : "" ,
    price : "" ,
    quantity : "" 
})

// ONChange All Option
const handleChange = (e) => {
    setVariantInputData({
        ...variantInputData , [e.target.name] : e.target.value
    })
}

// handleProduct OnChange  Product Label
const [productId , setProductId] = useState("")
const handleProduct = (e) => {
    setProductId(e);
    // console.log(productId);
}
// All Product Name From ProductData
const [allProductName , setAllProductName] = useState([])

// Get Product From Database
useEffect(() => {
async function allProduct () {
let arr = []
   const productData = await axios.get("http://localhost:4000/auth/v1/product/getproduct")
   productData.data.map((product) => {
    arr.push({
        value : product._id ,
        label : product.name
    })
    setAllProductName(arr);
   })
}
allProduct()
},[])

// handleColor OnChange & State
const [color , setColor] = useState("")
useEffect(() => {

},[color])
const handleColor = (value) => {
setColor(value);
}

// handleUpload OnClick
const [productImage , setProductImage] = useState("")
const handleImageChange = (e) => {
console.log(e.target.files[0]);
setProductImage(e.target.files[0]);
}
console.log(productImage)


// Submit All Option
    const handleSubmit = async () => {
        const data = await axios.post("http://localhost:4000/auth/v1/product/createvariants" ,{
            name : variantInputData.name ,
            description : variantInputData.description ,
            product : productId ,
            color : color ,
            image : productImage ,
            size : variantInputData.size ,
            ram : variantInputData.ram ,
            rom : variantInputData.rom ,
            storage : variantInputData.storage ,
            price : variantInputData.price ,
            quantity : variantInputData.quantity 
        },{
            headers : {'Content-Type' : 'multipart/form-data'},
        })
        console.log(data.data);
    }

    return (
        <>
            <Card
                title="Add Product Variants"
                style={{
                    width: "100%",
                }}
            >
                <Form >

                    <Form.Item label="Variants Name">
                        <Input onChange={handleChange} name = "name" />
                    </Form.Item>

                    <Form.Item label="Variants Description">
                        <TextArea onChange={handleChange} name = "description" rows={2} />
                    </Form.Item>

                    <Form.Item label="Select Product Product">
                        <Select
                            onChange={handleProduct}
                            showSearch
                            style={{
                                width: 200,
                            }}
                            placeholder="Select Product"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={allProductName}
                        />
                    </Form.Item>

                    <Form.Item label="Select Color">
                        <Select
                            onChange={handleColor}
                            showSearch
                            style={{
                                width: 200,
                            }}
                            placeholder="color"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: 'Red',
                                    label: 'Red',
                                },
                                {
                                    value: 'Silver',
                                    label: 'Silver',
                                },
                                {
                                    value: 'Green',
                                    label: 'Green',
                                },
                                {
                                    value: 'Blue',
                                    label: 'Blue',
                                },
                                {
                                    value: 'Black',
                                    label: 'Black',
                                },
                                {
                                    value: 'White',
                                    label: 'White',
                                },
                                {
                                    value: 'Maroon',
                                    label: 'Maroon',
                                },
                                {
                                    value: 'Pink',
                                    label: 'Pink',
                                },
                            ]}
                        />
                    </Form.Item>

 {/* Upload Start Here   */}
 



                    <Form.Item label="Size">
                        <Input onChange={handleChange} name = "size" />
                    </Form.Item>

                    <Form.Item label="Ram">
                        <Input onChange={handleChange} name = "ram" />
                    </Form.Item>

                    <Form.Item label="Rom">
                        <Input onChange={handleChange} name = "rom" />
                    </Form.Item>
                    <Form.Item label="Storage">
                        <Input onChange={handleChange} name = "storage"/>
                    </Form.Item>
                    <Form.Item label="Price">
                        <Input onChange={handleChange} name = "price"/>
                    </Form.Item>
                    <Form.Item label="Quantity">
                        <Input onChange={handleChange} name = "quantity"/>
                    </Form.Item>
                    <Form.Item label="Image">
                        <Input onChange={handleImageChange} type='file' />
                    </Form.Item>
                    <Button onClick={handleSubmit} type='primary'> Submit</Button>
                </Form>
            </Card>

        </>
    )
}

export default AddVariants