import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><Link to="/main">My App</Link></Navbar.Brand>
                <Nav className="me-auto navbar_warapper">
                    
                    <Link to="/home">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Register</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;