import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { FaHome, FaMobile, FaLaptop } from "react-icons/fa";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="start">
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <NavLink className="linke" to="/body">
                    <FaHome />
                    Home
                  </NavLink>
                  <hr />
                  <NavLink className="linke" to="/mobile">
                    <FaMobile />
                    Mobile
                  </NavLink>
                  <hr />
                  <NavLink className="linke" to="/Laptop">
                    <FaLaptop />
                    Laptop
                  </NavLink>
                  <hr />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
