import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from "../Layout/Product"
import Flex from '../Layout/Flex';
import axios from 'axios';
import {Link } from "react-router-dom"
const Pagination = ({ itemsPerPage }) => {
    const [productData , setProductData] = useState([])
    // get Product from database
    useEffect(() => {
      async  function getProductData(){
            const data = await axios.get("http://localhost:4000/auth/v1/product/getproduct")
            setProductData(data.data);
        }
        getProductData()
    },[productData])

    const items = productData;

    function Items({ currentItems }) {
        return (
            <>

                {currentItems &&
                    currentItems.map((item) => 
                    (
                        <div className='w-[32%]'>
                            <Link to={`variants/${item._id}`}>
                            <Product  badge={true} productImage = {item.image}   productName ={item.name} />
                            </Link>
                        </div>
                    ))
                }
            </>
        )
    }
    const [itemOffset, setItemOffset] = useState("")

    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const [selectedItems, setSelectedItems] = useState(0)
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setSelectedItems(event.selected)
        console.log("p", selectedItems);
        setItemOffset(newOffset);
    };
    return (
        <div >
            <div className='flex flex-wrap justify-between gap-y-8 '>
                <Items currentItems={currentItems} />
            </div>
            <Flex className="justify-between place-items-center mt-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    pageClassName=""
                    pageLinkClassName=" px-3 py-2 border-[1px] border-queaternary text-sm font-dmSans text-secondary"
                    previousClassName="page-item"
                    previousLinkClassName="page-link px-3 py-2 bg-secondary text-tertiary "
                    nextClassName="page-item"
                    nextLinkClassName="page-link page-link px-3 py-2 bg-secondary text-tertiary"
                    breakLinkClassName="page-link"
                    containerClassName="pagination flex gap-x-4 place-items-center "
                    activeClassName=" py-2 border-[1px]  text-sm font-dmSans text-tertiary bg-primary "
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
                <p className='text-secondary text-sm font-dmSans '>Products from {selectedItems + 1}  to {itemOffset + itemsPerPage} of {items.length}</p>
            </Flex>
        </div>
    )
}

export default Pagination