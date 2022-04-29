import React from 'react';
import {Pinfo,ConteProduct, BotonProduct} from "../styles/StyledComponent.js"

const Product = ({ product, handleAddToCart }) => {
  return (
    <ConteProduct key={product.id} >
    
    <BotonProduct type="button" onClick={handleAddToCart(product)}>
      <img src={product.img} alt={product.title} />
      <Pinfo>
        <h2>
          {product.title}
          <p style={{color: "red"}}>
            $ {' '}{product.Price}{'MXN '}
          </p>
        </h2>
      </Pinfo>
      </BotonProduct>

    </ConteProduct>
  );
}

export default Product;