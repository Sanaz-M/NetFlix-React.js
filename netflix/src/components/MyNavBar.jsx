import { Navbar, Nav} from "react-bootstrap";

const MyNavBar = () => {

    return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
        <Navbar.Brand href="/">
          <img
            src="./src/"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link active className="font-weight-bold" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              TV Shows
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              Movies
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              Recently Added
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              My List
            </Nav.Link>
          </Nav>
          <span className="d-flex align-items-center">
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default MyNavBar;
