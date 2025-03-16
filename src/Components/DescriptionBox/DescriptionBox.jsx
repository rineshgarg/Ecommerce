import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">
            Description
        </div>
        <div className="description-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to our online store, where style meets convenience! We offer a wide range of high-quality products, from fashion to home essentials, all at unbeatable prices. With easy navigation, secure checkout, and fast delivery, shopping has never been more enjoyable. Explore our collection today and experience a seamless online shopping experience tailored just for you!</p>
        <p>Our customer satisfaction is our top priority, and we’re committed to providing exceptional service with every purchase. Join our growing community of happy shoppers and stay up to date with the latest trends and exclusive deals! Happy shopping!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
