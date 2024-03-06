import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function TopBar() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand><img src = "https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link>Log In</Nav.Link>
                        <Button>Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}