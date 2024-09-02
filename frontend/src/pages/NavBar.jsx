import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#A6B37D', padding: '1rem 2rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="logo" height="40" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {['Products', 'Services', 'Offers', 'About Us'].map((item, index) => (
              <li className="nav-item mx-2" key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="nav-link"
                  style={{
                    color: '#333',
                    fontSize: '1rem',
                    fontWeight: '600',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.25rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    margin: '0 0.5rem', // Add margin for spacing
                    textDecoration: 'none',
                    backgroundColor: 'transparent' // Initial background color
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.backgroundColor = '#C1D8C3'; // Change background color on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = 'transparent'; // Revert background color
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link
                to="/login"
                className="nav-link"
                style={{
                  color: '#333',
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.25rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  margin: '0 0.5rem', // Add margin for spacing
                  textDecoration: 'none',
                  backgroundColor: 'transparent' // Initial background color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.backgroundColor = '#C1D8C3'; // Change background color on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = 'transparent'; // Revert background color
                }}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
