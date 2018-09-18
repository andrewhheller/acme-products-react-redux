import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Nav = ({ count, topRatedProduct }) => {

  return (
    <ul>
      <li>
        Products ({count})
      </li>
      <li>
        Top Rated ({topRatedProduct})
      </li>
    </ul>
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

  const topRatedProduct = sortedProducts[0] ? sortedProducts[0].name : ''

  return {
    count: products.length,
    topRatedProduct
  }
}


export default connect(mapStateToProps)(Nav);
