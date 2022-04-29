import { useState, useEffect } from "react";
import initialState from "../initialState.js"
import Constants from '../helpers/Constants';
import {getData} from "../helpers/ApiConsume";


const useInitialState = () =>{
const [state, setState] = useState(initialState);
const [products, setProducts] = useState([]);
const [counter,setCounter] = useState(0);

useEffect(() => {
  async function obtenerDatos(){
    const response = await getData(Constants.urlGuappjalotes);
    setProducts(response.data);
  }
  
  obtenerDatos();
}, [state])


const addCounter = () => {
    setCounter(counter + 1)
    return counter
  }

const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart,{...payload,index: addCounter()}]
    })
  };

const removeToCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.index !== payload.index)
    })
  }   

const addToBuyer = payload =>{
      setState({
          ...state,
          buyer: [...state.buyer, payload]
      })
  }

return {
    addToCart,
    removeToCart,
    addToBuyer,
    products,
    state,
    };
};

export default useInitialState;