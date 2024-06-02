import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Space, Table, Tag , Button} from 'antd';
import { useState } from 'react';


const allVariants = () => {
    const [getData , setGetData] = useState([])
    useEffect(() => {
       async function getVariants (){
            const data = await axios.get("http://localhost:4000/auth/v1/product/getvariants")
            setGetData(data.data);
        
        }
        getVariants()
    },[getData]) ;

    const deleteVariant = (data) => {
        const deleteData = axios.post("http://localhost:4000/auth/v1/product/deletevariants" , {
            data : data
        })
        console.log('ok');
    }
    const columns = [
        {
            title: 'SL',
            dataIndex: 'index',
            key: 'index',
            render:( _ , record , index ) => {
                return (index + 1);
            }
          },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'image',
        dataIndex: 'image',
        key: 'image',
        render : (_ , record) => (
            <img style={{width : "60px"}} src={record.image} alt="" />
        )
      },
      {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'product',
        dataIndex: 'product',
        key: 'product',
        render : ( _ , record) => {
            // console.log(record.product);
        }
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            
            <Button type= "primary" >Edit</Button>
            <Button onClick={() => deleteVariant (record._id)} type= "primary" danger >Delete</Button>
          </Space>
        ),
      },
    ];
  return (
    <>
    <Table columns={columns} dataSource={getData} />
    </>
  )
}

export default allVariants