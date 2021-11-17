import { Navbar, Nav} from "react-bootstrap";
import {Link, useLocation} from 'react-router-dom'

const MyNavBar = () => {
    const location = useLocation();

    return (
        <>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Link to="/">
        <Navbar.Brand>
          <img
            src="https://sm.pcmag.com/t/pcmag_me/photo/default/580b57fcd9996e24bc43c529_ca4r.1920.png"
            alt="logo"
            style={{ width: "70px", height: "35px" }}
          />
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/"> 
            <div className={"font-weight-bold links" +   (location.pathname === "/" ? " active" : "")}>
              Home 
              </div>
              </Link>
              <Link to="tv-shows">
            <div className= {"font-weight-bold links ml-2" +   (location.pathname === "tv-shows" ? " active" : "")}>
              TV Shows
            </div>
            </Link>
            <Link to="movies">
            <div className= {"font-weight-bold links ml-2" +   (location.pathname === "movies" ? " active" : "")}>
              Movies
              </div>
            </Link>
            <Link to="recently">
            <div className= {"font-weight-bold links ml-2" +   (location.pathname === "recently" ? " active" : "")}>
              Recently Added
              </div>
            </Link>
            <Link to="my-list">
            <div className= {"font-weight-bold links ml-2" +   (location.pathname === "my-list" ? " active" : "")}>
              My List
              </div>
            </Link>
          </Nav>
          <span className="d-flex align-items-center">
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
    
}

export default MyNavBar;
