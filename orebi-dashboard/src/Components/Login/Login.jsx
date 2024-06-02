import React from 'react';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Alert ,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userData } from '../../../slice/userSlice';
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [error , setError] = useState("")
  const [success , setSuccess] = useState("")
  const [loginData , setLoginData] = useState({
    email : "", 
    password : ""
  })
  const handleLogin = (e) => {
    setLoginData({
      ...loginData ,  [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async () => {
    const data = await axios.post("http://localhost:4000/auth/v1/authentication/login" , {
      email : loginData.email ,
      password : loginData.password
    })

    if(data.data.success){
      if (data.data.role == "member"){
        setError("This Dashboadr only for Merchant & Admin")
      }
      else{
        // console.log(data.data);
        dispatch(userData(data.data))
        setTimeout(() => {
          setSuccess(data.data.success)
          setError("")
        }, [2000])
        navigate("/")
      }

    }
    else{
      setError(data.data.error)
      setSuccess("")
    }
  }
  return (
    <>
            <Card
    title="Login Here"
    bordered={false}
    style={{
      width: 600,
      margin : "auto"
    }}
  >
    <Form
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 24,
        }}
        layout="vertical"
        disabled={componentDisabled}
        style={{
            maxWidth: 600,
        }}
    >
      {
        error && <Alert message={error} type="error" />
      }
      {
        success && <Alert message={success} type="success" /> 
      }
      
      
        <Form.Item label="Email">
          <Input onChange={handleLogin} name='email' />
        </Form.Item>
        <Form.Item label="Password">
          <Input onChange={handleLogin} name='password' type='password'/>
        </Form.Item>

        <Button onClick={handleSubmit}  type='primary'> Login </Button>
    </Form>
  </Card>

    </>
  )
}

export default Login