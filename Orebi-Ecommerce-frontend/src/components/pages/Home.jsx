import React, { useEffect } from 'react'
import Ads from '../Body/Ads'
import Banner from '../Banner/Banner'
import NewArrivals from '../Body/NewArrivals'
import AdsSeconsd from '../Body/AdsSeconsd'
import SpeatialOffer from '../Body/SpeatialOffer'
import BestSellers from '../Body/BestSellers'
import Footer from '../Body/Footer'
import axios from 'axios'

const Home = () => {

  return (
    <div>
        < Banner/>
        <Ads></Ads>
        <NewArrivals></NewArrivals>
        {/* <BestSellers></BestSellers>  */}
        <AdsSeconsd></AdsSeconsd>
        {/* <SpeatialOffer></SpeatialOffer> */}
    </div>
  )
}

export default Home