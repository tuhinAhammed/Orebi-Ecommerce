import React from 'react';
import { ProductOutlined, MailOutlined , UsergroupAddOutlined } from '@ant-design/icons';
import { Menu , Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

  
const Home = () => {
  const navigate = useNavigate()
  const userLoginData = useSelector(state => state.userData.value)
  console.log(userLoginData);
  useEffect(() => {
    if(!userLoginData){
      navigate("/login")
      console.log("not found");
    }
  },[])

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };  
  }
  
  const items = [

    // userLoginData?.role == "admin" && 
      getItem('Users', 'sub1', <UsergroupAddOutlined />, [
        getItem('Merchant', '2', ),
        getItem('User', '3', ),
      ]),

      getItem('product', 'sub2', <ProductOutlined />, [
        getItem('Add Product', '/addproduct', ),
        getItem('All Product', '/allproduct', ),
        getItem('Add Variants', '/addvariants', ),
        getItem('All Variants', '/allvariants', ),
      ]),

      getItem('Category', 'sub4', <MailOutlined />, [
        getItem('Add Category', '/addcategory', ),
        getItem('All Category', '/allcategory', ),
        getItem('Category Active Status', '/categoryactivestatus',),
      ]),


      getItem('Sub Category', 'sub5', <MailOutlined />, [
        getItem('Add Sub Category', '/addsubcategory', ),
        getItem('All Sub Category', '8', ),
        getItem('SubCategory Active Status', '/categoryactivestatus',),
      ]),
    ];
    
    const onClick = (e) => {
        navigate(e.key);
      };


  return (
    <Row>
    <Col span={6}>
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['']}
      defaultOpenKeys={['']}
      mode="inline"
      items={items}
    />
    </Col>
    <Col span={18}>
      <Outlet></Outlet>
    </Col>
  </Row>

  )
}

export default Home