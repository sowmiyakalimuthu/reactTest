import React from 'react'
import { useSelector } from 'react-redux'

function TestDetail() {
    const value = useSelector((e)=> e.test100)
    const productsToShow = value.detailProduct

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <div>
      <h1 style={{textAlign:"center"}}>Details of Product</h1>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
      {productsToShow.length>0 ? (
        <>
        {productsToShow.map((e,i) => (
          <div style={{maxWidth:"200px"}} key={i}>
          <h3>{e.title}</h3>
          <img src={e.image} style={{width:"100px", height:"100px", objectFit:"cover"}}/>
          <p>{e.price}</p>
          <p>{e.description}</p>
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
    </div>
  )
}

export default TestDetail