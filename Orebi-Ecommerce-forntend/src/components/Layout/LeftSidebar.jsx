import React from 'react'

import ShopByCategory from "./ShopByCategory"
import Flex from "../Layout/Flex"
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useState } from 'react';
import ShopByColor from './ShopByColor';
import ShopByBrand from './ShopByBrand';
import ShopByPrice from './ShopByPrice';
const LeftSidebar = () => {

  return (
    <> 
    {/* Shop By Category Here */}
        
        <ShopByCategory dropdown = {false} title = "Shop by Category"></ShopByCategory>
        <ShopByColor dropdown = {true}  title = "Color"></ShopByColor>
        <ShopByBrand dropdown = {true}  title = "Shop by Brand"></ShopByBrand>
        <ShopByPrice dropdown = {true}  title = "Shop By Price"></ShopByPrice>

    </>
  )
}

export default LeftSidebar