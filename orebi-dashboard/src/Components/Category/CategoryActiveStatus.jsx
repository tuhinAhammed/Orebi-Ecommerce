
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table , Modal ,Select, Radio, Tag, Alert  } from 'antd';
import Highlighter from 'react-highlight-words';
import { useEffect } from 'react';
import axios from 'axios';

const CategoryActiveStatus = () => {

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [changeStatusData , setChangeStatusData] = useState("waiting")
  const [categoryName , setCategoryName] = useState("")

  // CateGory Status - Part start

  const handleStatusChange = (e) => {
    setChangeStatusData(e)
  }
  useEffect(() => {
    console.log(changeStatusData);
  }, [changeStatusData])

   // CateGory Status - Part end

  //  category Name - part start

  const showModal = (record) => {
    setOpen(true);
    setCategoryName(record);
  };

  //  category Name - part start



  const [successUpdated , setSuccessUpdated] = useState("")
  const handleOk = async () => {
    console.log(categoryName);
    console.log(changeStatusData);
    const data = await axios.post("http://localhost:4000/auth/v1/category//category/status",{
      name : categoryName ,
      Status : changeStatusData
    })

    setLoading(true);
    setTimeout(() => {

      setLoading(false);
      setOpen(false);
    }, 1500);
 
    if(data.data.success){
      setSuccessUpdated(data.data.success)
      setTimeout(() => {
        setSuccessUpdated("")
      }, 4000);

    }

  };


  const handleCancel = () => {
    setOpen(false);
  };

  const [categoryStatus , setCategoryStatus] = useState([])
  
    useEffect(() =>{
      async function allActiveStatus (){
       const data = await axios.get("http://localhost:4000/auth/v1/category/get/category" )
       setCategoryStatus(data.data);
      }
      allActiveStatus()
    },[categoryStatus])


//  const arr
// // const categoryName = categoryStatus[0].name
// // console.log(categoryName);

//     // console.log(categoryName);
// // console.log(categoryStatus._id);
// // console.log(arr[0].name);

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1677ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });


    const columns = [
      {
        title: 'Category Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...getColumnSearchProps('name'),
      },
      {
        title: 'Category Status',
        dataIndex: 'Status',
        key: 'Status',
        width: '20%',
        ...getColumnSearchProps('Status'),
      },
      {
        title: 'Update Category Status',
        dataIndex: 'isActive',
        key: 'isActive',
        width: '20%',
        render : (_ , record) => ( 
          <>
 
  
          <Button type="primary" onClick={() => {showModal(record.name)}}>
        Edit Status
      </Button>

      <Modal
        record
        open={open}
        title="Change Category Status"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <h4>Category Name</h4>
        <Button  type="primary" >
        {categoryName}
          </Button>
        <h4>Change Status</h4>

    <Select
        mode="single"
        onChange = {handleStatusChange}
        defaultValue={"waiting"}
        placeholder="Outlined"
        style={{
          width : "100%"
        }}
        options={[
          {
            value: 'waiting',
            label: 'Waiting',
          },
          {
            value: 'rejected',
            label: 'Rejected',
          },
          {
            value: 'approved',
            label: 'Approved',
          },
        ]}
      />
      </Modal> 

      
            
          </>
        )

      },
      // {
      //   title: 'Active Status',
      //   dataIndex: 'isActive',
      //   key: 'isActive',
      //   width: '20%',
      //   render : (isActive) => <p>{isActive ? "Active" : "In Active"}</p>
      // },

      
    ];

    // category name collect sellector

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
  return (
    <>
        {
      successUpdated && 
    <Alert message={successUpdated} type="success" />

    }
    <Table columns={columns} dataSource={categoryStatus} />
    </>
  )
}

export default CategoryActiveStatus
