import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../context/AppContext';

const Checkout = () => {
  const { state, removeToCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeToCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.Price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
      {cart.length <= 0 ? (<h1>No hay nada</h1>) : (
          cart.map((item, i) => {
            return (
              <div key={item.id + i} className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>${item.Price}</span>
                </div>
                <button type="button" onClick={handleRemove(item)} ><i className="fas fa-trash-alt"/></button>
              </div>
            );
          })
        )}

      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;