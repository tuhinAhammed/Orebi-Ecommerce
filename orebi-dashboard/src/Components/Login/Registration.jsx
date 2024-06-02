import React from 'react'
import { useState } from 'react';
import {Dots} from 'react-preloaders';
import audio1 from "../AudioInform/a.mp3"
import audio2 from "../AudioInform/d.mp3"
import audio3 from "../AudioInform/c.mp3"
import { PlusOutlined } from '@ant-design/icons';
import {
    Alert,
    Button,
    Card,
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
    Upload
} from 'antd';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const Registration = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    const [error , setError] = useState ("")
    const [success , setSuccess] = useState ("")
    const [registrationData , setRegistrationData] = useState({
        firstName : "" ,
        lastName : "" ,
        email : "" ,
        telephone : "" ,
        address : "" ,
        city : "" ,
        postCode : "" ,
        division : "" ,
        district : "" ,
        password: ""

    })
    // console.log(registrationData);
    const handleChange = ((e) => {
        setRegistrationData({
            ...registrationData , [e.target.name] : e.target.value
        }) 
    })
    const HandleSignup =  async () => {
        // const errorr = data.data.error
        voiceInform()
        const data = await axios.post("http://localhost:4000/auth/v1/authentication/registration" , {
            firstName : registrationData.firstName ,
            lastName : registrationData.lastName ,
            email : registrationData.email ,
            telephone : registrationData.telephone ,
            address : registrationData.address ,
            city : registrationData.city ,
            postCode : registrationData.postCode ,
            division : registrationData.division ,
            district : registrationData.district ,
            password : registrationData.password 
        })

         if (data.data.error){
            voiceInformForError()
            setError(data.data.error)
            setSuccess("")
            
         }
         else {
            setSuccess(data.data.success)
            setError("")
            setPreLoading(true)
            setTimeout(() => {
               setPreLoading(false)
            }, 1000);
            voiceInformForSuccess()
        }

    }
const [preLoading , setPreLoading] = useState(false)

function voiceInform (){
    var audio = new Audio (audio1)
    audio.play()
    setTimeout( function(){
        audio.pause();
    } , 500)
}
function voiceInformForError (){
    var audio = new Audio (audio2)
    audio.play()
    setTimeout( function(){
        audio.pause();
    } , 4000)
}
function voiceInformForSuccess(){
    var audio = new Audio (audio3)
    audio.play()
    setTimeout(() => {
        audio.pause()
    } , 4000)
}
    return (
        <div>
        <Card
    title="Registration"
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
                    error &&
                    <Alert message={error} type="error" showIcon />
                }
                {
                    success && 
                    <Alert
                    message={success}
                    type="success"
                    showIcon
                  />
                  
                }

                <Form.Item  label="First Name">
                    <Input name="firstName" onChange={handleChange} />
                </Form.Item>
                <Form.Item  label="Last Name">
                    <Input name="lastName" onChange={handleChange} />
                </Form.Item>
                <Form.Item  label="Email">
                    <Input name="email" onChange={handleChange} />
                </Form.Item>
                <Form.Item  label="Telephone">
                    <Input name="telephone" onChange={handleChange} />
                </Form.Item>
                {/* <Form.Item  label="Address">
                    <Input name="address" onChange={handleChange} />
                </Form.Item>
                <Form.Item  label="City">
                    <Input name="city" onChange={handleChange} />
                </Form.Item> */}
                {/* <Form.Item  label="PostCode">
                    <Input name="postCode" onChange={handleChange} />
                </Form.Item>
                <Form.Item  label="Division">
                    <Input name="division" onChange={handleChange} />
                </Form.Item>
                <Form.Item  label="District">
                    <Input name="district" onChange={handleChange} />
                </Form.Item> */}
                <Form.Item  label="Password">
                    <Input name="password" onChange={handleChange} />
                </Form.Item>
                <Form.Item  >





                    <Button onClick={HandleSignup} type='primary'> SIGN UP </Button>
                    {
                    preLoading && <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                }
                </Form.Item>
            </Form>
  </Card>
            
        </div>
    )
}

export default Registration