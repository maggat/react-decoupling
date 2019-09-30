import React, { useRef } from 'react'

const AddProductsView = ({ onClick }) => {
  const inputEl = useRef(null);
  console.log(inputEl);
  return (
    <>
      <input ref={inputEl} name="productName" type="text" />
      <button onClick={() => onClick(inputEl)}>Add me!</button> 
      
    </>
  )
}

export default AddProductsView
