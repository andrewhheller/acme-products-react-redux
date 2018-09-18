import React, { Component } from 'react';
import { hashRouter as Router, Route } from 'react-router';

import { store, loadProducts } from './store';

import Products from './Products';
import ProductForm from './ProductForm';
import Nav from './Nav';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadProducts());
  }

  render() {
    return (
      <div>
        <Nav />
        <ProductForm />
        <Products />
      </div>
    )
  }

}
 

export default App;
