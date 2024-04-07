import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [getItem,setGetItem] =useState({})
  const getProductDetail = async()=>{
    let url = `https://my-json-server.typicode.com/omnahc/hnm/products/${id}`
    let res = await fetch(url)
    let data = await res.json()
    setGetItem(data)
    console.log(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <div className='detailBox'>
      <div className='detailImg'>
        <img src={getItem.img}/>
      </div>
      <div>
        <p>{getItem.title}</p>
        <p>₩{getItem.price}</p>
        <p>Conscious choice</p>
        <select className='size'>
          <option>사이즈 선택</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
        <div>
          <Button className='detaillPlusBtn' variant="danger">+추가</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
