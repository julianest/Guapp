import '../styles/App.css';
import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <Link to="/" >
            <img src={"https://res.cloudinary.com/docutv7ug/image/upload/v1651032721/Guappjalotes/logo_lzcuqi.svg"} className="App-logo" alt="logo" />
        </Link>
    )
}
export default Logo;
