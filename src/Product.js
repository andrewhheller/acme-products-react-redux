import React from 'react';
import { connect } from 'react-redux';

import { deleteProduct } from './store';

const Product = ({ product, index, onDeleteProduct }) => {
  const { name, rating } = product;

  return (
    <li style={{ color: (index === 0 || index === 1 || index === 2) ? 'green' : 'black' }}>
      {name} {rating}
      <button onClick={() => onDeleteProduct(product)}>X</button>  
    </li>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProduct: (product) => dispatch(deleteProduct(product))
  }
}


export default connect(null, mapDispatchToProps)(Product);
