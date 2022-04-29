import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Bebidas from '../components/Bebidas';
import Navbar from '../components/Navbar';
import Payment from '../components/Payment';
import Success from '../components/Success';
import Tamales from '../components/Tamales';
import Home from '../containers/Home';
import {AppContext} from '../context/AppContext';
import useInitialState from '../hooks/useInitialState.js';
import Information from '../components/Information';
import Checkout from '../components/Checkout';
import {Container, Spinner} from "react-bootstrap";

function AppRoutes() {
const initialState = useInitialState();
const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
    <Container fluid className="containerHidden">
      {isEmpty>0 ? (
      <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />  
              {/* Guappjalotes.jsx no se incluye porque ese sera el home */}
              <Route path='/bebidas' element={<Bebidas/>} />
              <Route path='/tamales' element={<Tamales/>} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='/checkout/information' element={<Information/>} />
              <Route path='/checkout/payment' element={<Payment/>} />
              <Route path='/checkout/success' element={<Success/>} />
              <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>  
        </AppContext.Provider>) 
        : <Spinner animation="border" variant="primary">Cargando...</Spinner>
        }
      </Container>
    </>
  );
}

export default AppRoutes;