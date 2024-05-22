import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getApiError, getApiResponse, getDetailProducts } from './Tes100Reducer'
import { Link } from 'react-router-dom'

function Test100() {
    const value = useSelector((e)=> e.test100)
    const dispatch = useDispatch()
    const [firstProduct, setFirstProduct]=useState(0)
    const [lastProduct, setLastProduct]=useState(5)
    const productsToShow = value.products.slice(firstProduct, lastProduct);

    console.log(productsToShow.length)
    console.log(productsToShow)
    useEffect(() => {
      const products= async ()=> {
          try {
              let {data} = await axios.get ("https://fakestoreapi.com/products")
              console.log(data)
              dispatch(getApiResponse(data))
          } catch (err) {
              dispatch(getApiError(err))
              console.log(err)
          }
      }
      products();
  }, [dispatch])

  function changeCount(){
    if(lastProduct>=value.products.length){
      setFirstProduct(0)
      setLastProduct(5)
    } else {
    setFirstProduct(lastProduct)
    setLastProduct(lastProduct+5)
  }
  }

  function showDetail(i){
    const detail = productsToShow.filter ((e,index) => {
      return i== index;
    })
    dispatch(getDetailProducts(detail));
  }

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <div>
      <h1 style={{textAlign:"center"}}>Products</h1>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
      {productsToShow.length>0 ? (
        <>
        {productsToShow.map((e,i) => (
          <div style={{maxWidth:"200px"}} key={i}>
          <h3>{e.title}</h3>
          <Link to={"/detail"}><img onClick={()=>showDetail(i)} src={e.image} style={{width:"100px", height:"100px", objectFit:"cover"}}/></Link>
          <p>{e.price}</p>
          </div>
        ))
        }
        </>
      ):(
        <>
        <p>Loading</p>
        </>
      )}
      </div>
      <div style={{marginLeft:"45vw"}}>
      <button  onClick={changeCount}>Next page</button>
      </div>  
      
    </div>
  )
}

export default Test100