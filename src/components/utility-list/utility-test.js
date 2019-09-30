import React, { useEffect, useState, Component } from 'react';
import Product from './utility-list-view';
import { db } from '../../firebase';
import { useList } from 'react-firebase-hooks/database';

/*function UtilityListLogic4() {

  const { error, loading, value } = useList(firebase.database().ref('list'));

  console.log(value)
  const dbProductsRef = db.getProducts();
  const [products, setProducts] = useState({});

  const fetchProduct = () => {
    // Format the products from obj to array
    dbProductsRef.on('value', snap => {
      console.log(snap.val())
      //setProducts(snap.val());
    });
  }

  useEffect( () => {
    //fetchProduct();
    console.log(dbProductsRef)
  });

  const buildList = () => {
    products.map( product => <li>{product}</li>)
  };

  //const { isLoading, productData } = this.props;

  return (
    <>
      <Product
          list-items={products}
      />
    </>
  )
}
*/


export default class UtilityListLogic2 extends Component {
  constructor(props){
    super(props);
    this.dbRef = db.getProducts();
    this.state={
      test: {}
    }
  }

  componentDidMount(){
    this.dbRef.on('value', snap => {
      console.log(snap.val())
      //setProducts(snap.val());
    });
  }
  render() {
    return <div>Works</div>
  }
}
