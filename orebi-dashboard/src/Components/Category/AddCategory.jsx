import React, { useState } from 'react'
import { Card, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Alert
} from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const AddCategory = () => {
    const navigate = useNavigate()
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [categoryData , setCategoryData] = useState({
        name : "" ,
        description : ""
    })
    const handleChange = (e) =>{
        const name = e.target.name 
        const value = e.target.value
        setCategoryData({
            ...categoryData , [name] : value
        })
        
    }
    const [success , setSuccess] = useState("")
    const [error , setError] = useState("")
    const handleSubmit = async () => {
       const data = await axios.post("http://localhost:4000/auth/v1/category/create/category" , {
        name : categoryData.name ,
        description : categoryData.description 
       })
       if (data.data.error){
        setError(data.data.error)
        setSuccess("")
       }
       else {

        setError("")
        setSuccess(data.data.success)
        setTimeout(() => {
            setSuccess("")
            navigate("/allcategory")
        }, 2000);
        
// setCategoryData("")


       }
       console.log(data.data);
    }

  return (

    <Card
    title=" Create Category"
    bordered={false}
      style={{
        width: "100%",
        margin : "auto"
      }}
    >
       <>

      <Form
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="horizontal"
        style={{
          maxWidth: "100%",
        }}
      >
        {
            success && 
            <Alert message={success} type="success" />
        }

        {
            error &&
            <Alert message={error} type="error" />
        }


        <Form.Item label="Name"> 
        <h3>Category Name :</h3>
          <Input onChange={handleChange} name = "name" placeholder="Category Name" />
        </Form.Item>
        <Form.Item label="Descriptione"> 
        <h3>Category Description :</h3>
          <Input onChange={handleChange} name ="description" placeholder="Category Descriptione" />
        </Form.Item>
        <Button onClick={handleSubmit} type="primary">Create Category</Button>
      </Form>
    </> 
    </Card>

  )
}

export default AddCategory