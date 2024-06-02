import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Select,
   Tag ,
   Alert,
  InputNumber,
  Radio,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
import { Card, Space } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
        }}
      >
        {label}
      </Tag>
    );
  };
    
const AddSubCategory = () => {
    const [categoryData , setCategoryData] = useState([])
    useEffect(() => {
       const arr = []
       async function allData (){
        const data = await axios.get("http://localhost:4000/auth/v1/category/get/category")
        data.data.map((category) => {
            arr.push({
                value : category._id ,
                label : category.name
            })
            setCategoryData(arr)
        })
       }
       allData()
    },[])
    console.log(categoryData);
    const [subCategoryData , setSubCategoryData] = useState({
        name : "" ,
        description : ""
    })
   
    const handleChange = (e) => {
        setSubCategoryData({
            ...subCategoryData , [e.target.name] : e.target.value
        })

    }
    const [category , setCategory] = useState()
    const handleCategory = (e) => {
        setCategory(e)

    }
   const handleSubmit = async () => {
    const data =  await axios.post("http://localhost:4000/auth/v1/category/create/subcategory" , {
        name : subCategoryData.name ,
        description : subCategoryData.description ,
        category : category
    })
    if (data.data.error){
        setError(data.data.error)
        setSuccess("")
    }
    else{
      setSuccess(data.data.success)
      setTimeout(() => {
        setSuccess("")
      }, 2000);
        setError("")
        setSubCategoryData({
          name : "" ,
          description : ""
        })
        setCategory(null)
    }
   }

   const [error , setError] = useState("")
   const [success , setSuccess] = useState("")
   
  return (

    <Card
    title=" Create Sub Category"
    bordered={false}
      style={{
        width: "100%",
        margin : "auto"
      }}
    >
        {
            error && 
            <Alert message={error} type="error" />
        }
        {
            success && 
            <Alert message={success} type="success" />
        }

        <Form.Item > 
        <h4>Sub Category Name</h4>
          <Input onChange={handleChange} name='name' placeholder='Sub Category Name' value = {subCategoryData.name}/>
        </Form.Item>
        <Form.Item > 
        <h4>Sub Category Description</h4>
        <textarea onChange={handleChange} name='description' placeholder='Sub Category description' value = {subCategoryData.description} style={{width : "100%", height : "100px" } }/>
        </Form.Item>
        <Select
            onChange={handleCategory}
            mode="single"
            value={category}
            placeholder = "Select Category"
            tagRender={tagRender}
            style={{
            width: '100%',
            }}
            options={categoryData}
  />
        <Button onClick={handleSubmit} style={{margin : "20px 0px"}} type="primary" >
            Upload Submit Category
          </Button>
    </Card>

  )
}

export default AddSubCategory