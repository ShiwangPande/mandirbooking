import { Button } from 'react-bootstrap';
import React, { useRef, useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./navbar.css";
import logo from "./om.png";
function NavBar() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'ENGLISH', value: '1' },
        { name: 'HINDI', value: '2' },
    ];


    return (
        <>
            {["sm",].map((expand) => (
                <Navbar collapseOnSelect expand="lg" bg="" variant="dark" style={{ backgroundImage: "linear-gradient( 90deg, hsl(10deg 100% 38%) 0%, hsl(15deg 100% 39%) 11%, hsl(19deg 100% 41%) 22%, hsl(21deg 100% 42%) 33%, hsl(23deg 100% 44%) 44%, hsl(25deg 100% 45%) 56%, hsl(26deg 100% 46%) 67%, hsl(27deg 100% 48%) 78%, hsl(28deg 100% 49%) 89%, hsl(29deg 100% 50%) 100% )" }}>
                    <Container>
                        <Navbar.Brand href="/" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "19px" }}>
                            <img className='logo' src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Navbar.Offcanvas className='offcanvass'
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton style={{ color: "#EEEEEE" }}>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "25px" }}>
                                        <img className='logo' src={logo} alt="" />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='offcanva'>
                                    <Nav className="me-auto navbar-dark" style={{ gap: "20px", margin: "auto", alignItems: "center" }} >
                                        <Nav.Link className='nav-item' href="/" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Home</Nav.Link>
                                        <Nav.Link className='nav-item' href="/about" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>About Us</Nav.Link>
                                        <Nav.Link className='nav-item' href="/puja" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Pujas</Nav.Link>
                                        {/* {
                                                currentUser ? <Nav.Link className='nav-item' href="/content" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}> Student Corner</Nav.Link> :
                                                    <div onClick={() => { signInWithGoogle(); <Redirect to="/content" /> }} className='nav-item' style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px", cursor: "pointer" }}> Student Corner</div>} */}

                                        <Nav.Link className='nav-item' href="/gallery" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Gallery</Nav.Link>
                                        <Nav.Link className='nav-item' href="/contact" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Contact</Nav.Link>
                                    </Nav>
                                    <Nav className='booking'>
                                        <div className='user_icon' eventKey={2} href="/login" style={{ color: "#EEEEEE", fontWeight: "bolder", fontSize: "15px", display: "flex", justifyContent: "center" }}>
                                            <DropdownButton variant="outline-light" id="dropdown-basic-button" title="Puja" >
                                                <Dropdown.Item href="/puja">कालसर्प दोष पूजा </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">मंगल भात पूजा </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">महामृत्युंजय मंत्र</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">रुद्राभिषेक पूजा</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">नागबली नारायण बलि</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">पित्र दोष</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">महाकालेश्वर अभिषेक पूजन</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">कुंभ विवाह की पूजा</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">नवग्रह शांति पूजा</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">पारदेश्वर शिवलिंग अभिषेक पूजन</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="/puja">विशेष कामना पूर्ति अनुष्ठान पूजा</Dropdown.Item>
                                            </DropdownButton>
                                            {/* <Button variant="outline-light" type='submit' style={{}}  >Booking</Button> */}


                                        </div>
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Navbar.Collapse>
                    </Container >
                </Navbar >
            ))}
        </>
    )
}

export default NavBar;