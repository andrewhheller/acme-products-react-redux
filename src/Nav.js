import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ count, topRatedProduct }) => {

  return (
    <ul>
      <Link to="/products"><li>Products ({count})</li></Link>
      <Link to="/top-rated-product"><li>Top Rated ({topRatedProduct})</li></Link>
    </ul>
  )

}

const mapStateToProps = ({ products }) => {
  const sortedProducts = products.sort((a, b) => b.rating - a.rating);
  const topRatedProduct = sortedProducts[0] ? sortedProducts[0].name : ''

  return {
    count: products.length,
    topRatedProduct
  }
}


export default connect(mapStateToProps)(Nav);
