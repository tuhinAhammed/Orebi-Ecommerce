import React, { useState } from 'react'
import { Button, Input } from "antd"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Select, Tag } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';


// console.log(allStoreState);
const AddProduct = () => {
  const [allStoreState, setAllStoreState] = useState([])

  useEffect(() => {
    async function allStore() {
      let arr = []
      const data = await axios.get("http://localhost:4000/auth/v1/merchant/getallstore")
      //  console.log(data.data);
      data.data.map((store) => {
        // console.log(store);
        arr.push({
          value: store._id,
          label: store.storeName
        })
        setAllStoreState(arr);
      })

    }

    allStore()
    // console.log("Ok");
  }, [allStoreState])

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  }
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
  const [productName, setProductName] = useState("")
  const [storeName, setStoreName] = useState("")
  const [productImage , setProductImage] = useState("")
  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  }
  const handleProductName = (e) => {
    setProductName(e.target.value);
  }
  async function handleProductUpload() {
    const addProduct = await axios.post("http://localhost:4000/auth/v1/product/createproduct", {
      name: productName,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      store: storeName ,
      image : productImage
    },
    {
      headers : {'Content-Type' : 'multipart/form-data'},
  })
  setProductName("")
  setEditorState(EditorState.createEmpty());
  setStoreName("");
  setProductImage("");
  }
  return (
    <>
      <h3>Product Name :</h3>
      <Input onChange={handleProductName} placeholder="Product Name" />
      <h3>Product Description : </h3>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <h3>Store </h3>
      <Select
        onChange={(e) => setStoreName(e)}
        mode="single"
        tagRender={tagRender}
        style={{
          width: '100%',
        }}
        options={allStoreState}
      />
      <h3>Upload Image </h3>
       <Input onChange={handleImageChange} type='file' />

      <Button onClick={handleProductUpload} style={{ margin: "20px 0px" }} type="primary" >
        Upload Product
      </Button>
    </>

  )
}

export default AddProduct