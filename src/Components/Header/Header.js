// import {Navbar, Nav} from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
            // <Navbar  bg="dark" expand="lg">
            //     <Navbar.Brand href="#home">Pablo Lopez</Navbar.Brand>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav" />
            //     <Nav className="mr-auto">
            //         <Nav.Link href="#home">Bienvenido</Nav.Link>
            //         <Nav.Link href="#link">Servicios</Nav.Link>
            //         <Nav.Link href="#link">Consultas</Nav.Link>
            //     </Nav>
            // </Navbar>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">Pablo Lopez</a> 
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav justify-content-end me-3" id="ul-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#bienvenida" id="l-bienvenida"> Terapia </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#sobre-mi" id="l-servicios">Sobre mi</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#contacto" id="l-contacto">Consulta</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
    );
}
 
export default Header;