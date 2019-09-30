import React from 'react';
import AddProductView from './add-products-view';
import { db } from '../../firebase';

const AddProduct = () => {
  const updateProducts = db.updateProducts;
  const dbProducts = db.getProducts();

  const sendData = data => {
    let products = ''
    dbProducts.on('value', snap => products = snap.val().productList)
    products.push(data.current.value);
    console.log(products);
    updateProducts(products);
  }

  return (
    <>
      <AddProductView
        onClick={sendData}
      />
    </>
  )
}

export default AddProduct
