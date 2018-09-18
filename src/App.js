import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { store, loadProducts } from './store';

import Products from './Products';
import TopRatedProduct from './TopRatedProduct';
import Nav from './Nav';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadProducts());
  }

  render() {
    return (
      // <div>
      //   <Nav />
      //   <ProductForm />
      //   <Products />
      // </div>
      <Router>
        <div>
          <Nav />
          <Route path="/products" component={Products} />
          <Route path="/top-rated-product" component={TopRatedProduct} />
        </div>
      </Router>
    )
  }

}
 

export default App;
