"use client"
import Link from "next/link";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from '@/components/assests/png/shopify.png'
import Image from "next/image";
import  './navbar.css'
const NavHeader = () => {
    return (
        // <div>
            <Navbar expand="lg" sticky="top"  className='bg-black main_nav fade-in2' id="navbar">
                <Container className='sm:px-3 px-4' fluid >
                    <Navbar.Brand className='' >
                        <Image src={logo} alt="" className="nav_img"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className='lg:ms-2 ms-auto border-0 text-white p-0 mb-1' style={{
                        fontSize: "13px",
                        paddingInline: "6px"
                    }} >
                      X
                    </Navbar.Toggle>
                    <Nav className='' >
                        <Form>
                            <Form.Group>
                                <Form.Control type="search" placeholder="search" className="search" />
                            </Form.Group>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>
        // </div>
    );
}

export default NavHeader;