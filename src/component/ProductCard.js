import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navGate = useNavigate();
  const showDetail = ()=>{
    navGate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
      <div className='itemImgBox'>
        <img src={item?.img} />
      </div>
      <div>{item?.choice == true ? 'Conscious choice':''}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true ? '신제품':''}</div>
    </div>
  )
}

export default ProductCard
