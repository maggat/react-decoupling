import React, { useState, useEffect } from 'react';

import Product from './utility-list-view';
import { db } from '../../firebase';
import { type } from 'os';

let productsFetched = false;

export default function UtilityList() {
  const dbProducts = db.getProducts();
  const [products, setProducts] = useState({});

  const buildList = (products) => {
    fetchProducts();
    if (Object.keys(products).length) { 
      return Object.values(products).map(product => <li>{product}</li>) 
    }
  };

  const fetchProducts = () => {
    if(!productsFetched){
      console.log(products);
      dbProducts.on('value', snap => {
        setProducts(snap.val())
        productsFetched = true;
      })
    }
  }

  return (   
    <>
      {!!products &&
      <div>
        <Product
          listItems={buildList(['products'])}
        />
        {Object.keys(products).map(key => {
          if(typeof products[key] !== 'object'){
          return(
          <div>{products[key]}</div>
          );
          }
        })}
        </div>
      }
    </>
  )
}
