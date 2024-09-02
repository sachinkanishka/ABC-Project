import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "./NavBar";
import styled from "styled-components";
import DashboardProduct from "./dashboard/DashboardProduct";
import DashboardService from "./dashboard/DashboardService";
import DashboardOffer from "./dashboard/DashboardOffer";
import AboutUs from "./AboutUs";
import { UniversalContext } from '../context/UniversalContext';
import { barrier } from "../middleware/securityMiddleware";
import useItemsFetch from "../hooks/useItemsFetch";

// Styled Navbar
const StyledNavbar = styled(Navbar)`
  position: relative;
  z-index: 1000; /* add high z-index */
`;

const Homepage = () => {
  useItemsFetch();
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();

  useEffect(() => {
    barrier(setValue, navigate);
  }, [setValue, navigate]);

  return (
    <>
      <StyledNavbar />
      <div className="homepage-container" style={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '2rem',
        backgroundImage: 'url(https://www.savills.co.uk/_images/adobestock-539646437.jpg)',
        color: '#fff' // Ensure text is readable against the background
      }}>
        <Routes>
          <Route path="/"/>
          <Route
            path="products"
            element={
              <div className="mt-5 mb-5">
                <DashboardProduct />
              </div>
            }
          />
          <Route
            path="services"
            element={
              <div className="mt-5 mb-5">
                <DashboardService />
              </div>
            }
          />
          <Route
            path="offers"
            element={
              <div className="mt-5 mb-5">
                <DashboardOffer />
              </div>
            }
          />
          <Route
            path="about-us"
            element={
              <div className="mt-5 mb-5">
                <AboutUs />
              </div>
            }
          />
        </Routes>
        {/* Only show hero and features sections on the homepage */}
        <Routes>
          <Route path="/" element={
            <>
              <div className="hero-section" style={{
                textAlign: 'center',
                padding: '4rem 0',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text readability
            
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                margin: '1rem auto',
                maxWidth: '800px'
              }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Discover Your Perfect Getaway</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.5' }}>
                  Indulge in a retreat like no other. Our luxurious rooms and top-tier amenities offer the ultimate in relaxation and comfort. Explore our offerings and make your reservation today!
                </p>
              </div>
              <div className="features-section" style={{
                marginTop: '3rem',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Why Choose Us</h2>
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="col-md-4" style={{
                    margin: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for feature blocks
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    height: '200px',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Elegant Rooms</h3>
                    <p style={{ fontSize: '1rem' }}>Relax in our elegantly designed rooms, crafted for comfort and style.</p>
                  </div>
                  <div className="col-md-4" style={{
                    margin: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for feature blocks
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    height: '200px',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Premium Amenities</h3>
                    <p style={{ fontSize: '1rem' }}>Experience our top-notch amenities, including a spa, gourmet dining, and more.</p>
                  </div>
                  <div className="col-md-4" style={{
                    margin: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for feature blocks
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    height: '200px',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Special Deals</h3>
                    <p style={{ fontSize: '1rem' }}>Discover our exclusive packages and offers for an exceptional stay.</p>
                  </div>
                </div>
              </div>
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
