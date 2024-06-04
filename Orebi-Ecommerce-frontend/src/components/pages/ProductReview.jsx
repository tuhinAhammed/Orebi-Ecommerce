import React from 'react'
import Flex from '../Layout/Flex'
import RatingCount from '../Layout/RatingCount'

const ProductReview = ({ count , className }) => {
    return (
        <div className={`${className}`}>
            <Flex className="place-items-center gap-10 text-base font-dmSans">
                <div className="des">Description</div>
                <div className="review">Review({count})</div>
            </Flex>
            <div className="reviewCount py-6 text-base text-secondary">{count} review for Product</div>
            <Flex className="justify-between place-items-center">
                <Flex className="place-items-center gap-10">
                    <div className="reviewSender text-base text-primary font-dmSans">John Ford</div>
                    <RatingCount></RatingCount>
                </Flex>
            <div className="revierTime text-sm text-secondary font-dmSans"> 6 Month ago</div>
            </Flex>
            <div className="reviewDes text-sm text-secondary font-dmSans mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

            </div>
        </div>
    )
}

export default ProductReview