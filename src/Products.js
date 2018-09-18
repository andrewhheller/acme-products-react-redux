import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import ProductForm from './ProductForm';

const Products = ({ products }) => {

  return (
    <div>
      <ProductForm />
      <ul>
        {
          products.map((product, index) => <Product key={product.id} index={index} product={product} />)
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ products }) => {

  const bubbleSort = array => {
    let swap;
    let arrayLen = array.length;
  
    for(let i = 0; i < array.length; i++) {
      arrayLen--;
      let sorted = true;
  
      for(let j = 0; j < arrayLen; j++) {
  
        if(array[j].rating < array[j + 1].rating) {
          sorted = false;
          swap = array[j]
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
  
      }
  
    }
  
    return array;
  }
  
  let sortedProducts = bubbleSort(products)

  return {
    products: sortedProducts
  }
}

export default connect(mapStateToProps)(Products);
export {
  mapStateToProps
}
