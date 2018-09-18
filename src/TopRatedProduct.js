import React from 'react';
import { connect } from 'react-redux';

const TopRatedProduct = ({ topRatedProduct }) => {

  return (
    <ul>
      <li>{topRatedProduct}</li>
    </ul>
  )

}

const mapStateToProps = ({ products }) => {

  const sortedProducts = products.sort((a, b) => b.rating - a.rating);
  const topRatedProduct = sortedProducts[0] ? sortedProducts[0].name : ''

  return {
    topRatedProduct
  }
}



export default connect(mapStateToProps)(TopRatedProduct);
