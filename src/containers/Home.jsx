import '../styles/App.css';
import initialState from '../initialState';
import Products from '../components/Products';
import {Container} from "react-bootstrap";



const Home = () =>{

    return(
        <>
            <Container>
                <div>
                    <Products productSendFromHomeToProducts={initialState.products}/>    
                </div>
            </Container>      
        </>
    )
}

export default Home