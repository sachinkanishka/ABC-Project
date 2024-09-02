import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";
import logoSm from "../assets/images/logo-sm.png";
import { useContext } from 'react';
import { UniversalContext } from '../context/UniversalContext';

function Sidebar() {
  const { getValue } = useContext(UniversalContext);
  const userType = getValue("userType");

  const sidebarStyle = {
    backgroundColor: "#1f1f1f",
    width: "250px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    paddingTop: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    zIndex: "1000",
  };

  const linkStyle = {
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "15px 20px",
    textDecoration: "none",
    borderRadius: "8px",
    margin: "5px 0",
    transition: "background 0.3s ease",
  };

  const titleStyle = {
    color: "#999999",
    fontSize: "14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    margin: "20px 0 10px 20px",
  };

  const iconStyle = {
    marginRight: "10px",
    fontSize: "18px",
  };

  return (
    <div className="leftside-menu" style={sidebarStyle}>
      <Link to="/" className="logo logo-light">
        <span className="logo-lg">
          <img src={logo} alt="logo" height="30" />
        </span>
        <span className="logo-sm">
          <img src={logoSm} alt="small logo" />
        </span>
      </Link>

      <Link to="/" className="logo logo-dark">
        <span className="logo-lg">
          <img src={logoDark} alt="dark logo" height="30" />
        </span>
        <span className="logo-sm">
          <img src={logoSm} alt="small logo" />
        </span>
      </Link>

      <div className="h-100" id="leftside-menu-container" data-simplebar style={{ overflowY: "auto" }}>
        <ul className="side-nav">
          <li className="side-nav-title" style={titleStyle}>Main</li>

          {userType === 'customer' ? (
            <>
              <li className="side-nav-item">
                <Link to="products" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-store-2-line" style={iconStyle}></i>
                  <span> Products </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="services" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-service-line" style={iconStyle}></i>
                  <span> Services </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="offers" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-gift-2-line" style={iconStyle}></i>
                  <span> Offers </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="bill" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-money-dollar-circle-line" style={iconStyle}></i>
                  <span> Billing History </span>
                </Link>
              </li>
            </>
          ) : userType === 'staff' ? (
            <>
              <li className="side-nav-item">
                <Link to="products" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-store-2-line" style={iconStyle}></i>
                  <span> Products </span>
                </Link>
              </li>
          
              <li className="side-nav-item">
                <Link to="services" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-service-line" style={iconStyle}></i>
                  <span> Services </span>
                </Link>
              </li>
          
              <li className="side-nav-item">
                <Link to="offers" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-gift-2-line" style={iconStyle}></i>
                  <span> Offers </span>
                </Link>
              </li>
          
              <li className="side-nav-item">
                <Link to="bill" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-money-dollar-circle-line" style={iconStyle}></i>
                  <span> Billing History </span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="side-nav-item">
                <Link to="/dashboard" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-dashboard-3-line" style={iconStyle}></i>
                  <span> Dashboard </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="products" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-store-2-line" style={iconStyle}></i>
                  <span> Products </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="categories" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-list-check-2" style={iconStyle}></i>
                  <span> Categories </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="services" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-service-line" style={iconStyle}></i>
                  <span> Services </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="offers" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-gift-2-line" style={iconStyle}></i>
                  <span> Offers </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="users" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-user-3-line" style={iconStyle}></i>
                  <span> Users </span>
                </Link>
              </li>

              <li className="side-nav-item">
                <Link to="bill" className="side-nav-link" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
                  <i className="ri-money-dollar-circle-line" style={iconStyle}></i>
                  <span> Billing History </span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
