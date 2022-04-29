import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";
import ChartMap from "../components/Map";


const Payment = () => {
const {state} = useContext(AppContext);
const {cart} = state;

  return (
    <div className="Payment">
        <div className="Payment-content">
            <h3>Resumen del Pedido</h3>
            {cart.map((item) =>(
              <div clasname="Payment-item" key={item.title}>
                <div className= "Payment-element">
                  <h4>{item.title}</h4>
                  <span>
                    $
                    {" "}
                    {item.Price}
                  </span>
                </div>                  
              </div>
            ))}
            <div className="Payment-button">
                <button>Boton de pago</button> 
            </div>
            
            <ChartMap/>


        </div>
    </div>
  )
}

export default Payment