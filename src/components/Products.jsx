import React, { useContext } from 'react';
import Product from './Product';
import {AppContext} from '../context/AppContext.js';
import {ProductsStyled} from "../styles/StyledComponent.js";


const Products = () => {
const {products, addToCart} = useContext(AppContext);
  // const {products} = state;

const handleAddToCart = product =>() => {
    addToCart(product)
  }

  return (
    <ProductsStyled>
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
    </ProductsStyled>
  );
}

export default Products;