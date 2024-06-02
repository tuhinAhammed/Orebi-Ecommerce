import React from 'react'
import { Space, Table , message , Popconfirm , Button } from 'antd';


import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const AllProduct = () => {
  const [productData , setProductData] = useState([])
  const [open, setOpen] = useState(false);

  const confirm = () => {
    setOpen(false);
    message.success('Succesfully Deleted');
  };

  const handleDelete = async (demo) => {
    const data = await axios.post("http://localhost:4000/auth/v1/product/deleteproduct", {
     demo : demo
   })
   confirm()
   }

    useEffect(() => {
        async function allProducts(){
            const data = await axios.get("http://localhost:4000/auth/v1/product/getproduct")
            setProductData(data.data);
            
        }
        allProducts()
        // console.log(productData);

    },[productData])
console.log(productData);
    const columns = [
        {
            title: 'SL',
            dataIndex: 'indexNmbr',
            key: 'indexNmbr',
            render: (_, record ,index) => {return index + 1}
            ,
          },
      {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>
        ,
      },
      {
        title: 'Store',
        dataIndex: 'storeName',
        key: 'storeName',
        render: (_, record) => (
            <p> {record.store.storeName}</p> 
          ),
      },


      {
        title: 'image',
        dataIndex: 'image',
        key: 'image',
        render: (_, record) => (
                <img style={{width : "60px" }} src={record.image} alt="" />
          ),
      },
    
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <Button  type="primary" >Edit</Button>
            <Popconfirm
              open={open}
             onConfirm={confirm}>
            <Button onClick = {() => handleDelete(record._id)} type="primary" danger>Delete</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ];

  return (
    <div>
        <Table columns={columns} dataSource={productData} />
    </div>
  )
}

export default AllProduct