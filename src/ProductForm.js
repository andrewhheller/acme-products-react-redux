import React from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

import { createProduct } from './store';

const ProductForm = ({ onCreateProduct }) => {
  return (
    <button onClick={() => onCreateProduct({ name: faker.commerce.product(), rating: (Math.random() *10) })}>Add Product</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateProduct: (product) => dispatch(createProduct(product))
  }
}




export default connect(null, mapDispatchToProps)(ProductForm);
