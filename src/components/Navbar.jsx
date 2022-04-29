import React, {useContext} from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/App.css';
import {AppContext} from '../context/AppContext';
import Logo from "./Logo";
import {NavBarr, ConteCheckout} from "../styles/StyledComponent"


const Navbar = () => {
const {state} =useContext(AppContext);
const {cart} = state; //destructura cart de state

return (
    <>
        <Logo/>
        <ConteCheckout>
            <NavLink className="NavBarIcon"  to="/checkout"><i className="fas fa-shopping-basket"></i></NavLink>
            {cart.length > 0 && <div className='header-alert'>{cart.length} </div>}
        </ConteCheckout>
        
        <div><h1>Nada como una Guajolota para empezar el dia</h1></div>
        <NavBarr>
            <NavLink className="NavBarItems"  to="/home">Guappjalotas</NavLink>
            <NavLink className="NavBarItems"  to="/bebidas">Bebidas</NavLink>
            <NavLink className="NavBarItems"  to="/tamales">Tamales</NavLink>
            
        </NavBarr>
        

    </>
    )
}
export default Navbar