import { db } from './firebase';

// User API
export const getProducts = () => {
    return db.ref("products");
}
export const getVariants= () => {
    db.ref('products').child('variant').once('value');
}
export const updateProducts = products => {
    db.ref("products").child('productList').set(products);
}
