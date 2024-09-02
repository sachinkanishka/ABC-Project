import { useState, useContext, useEffect } from 'react';
import { UniversalContext } from '../context/UniversalContext';

const SummaryCard = () => {
  const { getValue } = useContext(UniversalContext);
  const [products, setProducts] = useState(0);
  const [services, setServices] = useState(0);
  const [offers, setOffers] = useState(0);
  const [orders, setOrders] = useState(0);

  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const productsData = getValue("products");
      const servicesData = getValue("services");
      const offersData = getValue("offers");
      const ordersData = getValue("orders");

      if (productsData) {
        setProducts(productsData.length);
      }
      if (servicesData) {
        setServices(servicesData.length);
      }
      if (offersData) {
        setOffers(offersData.length);
      }
      if (ordersData) {
        setOrders(ordersData.length);
      }
    };
    fetchData();
  }, [getValue("products"), getValue("services"), getValue("offers"), getValue("orders")]);

  const cardStyle = {
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const hoveredCardStyle = {
    color: '#007bff', // Change this color as desired for the hover effect
  };

  const iconStyle = {
    fontSize: '24px',
    color: '#666',
  };

  const textUppercaseStyle = {
    fontWeight: 600,
    color: '#666',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
  };

  const cardBodyStyle = {
    padding: '20px',
  };

  const handleMouseEnter = (cardName) => {
    setHoveredCard(cardName);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="row">
      <div className="col-xxl-3 col-sm-6">
        <div
          className="card widget-flat"
          style={hoveredCard === 'products' ? { ...cardStyle, ...hoveredCardStyle } : cardStyle}
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-body" style={cardBodyStyle}>
            <div className="float-end">
              <i className="ri-eye-line widget-icon" style={iconStyle} />
            </div>
            <h6 className="text-uppercase mt-0" style={textUppercaseStyle}>
              Total Products
            </h6>
            <h2 className="my-2" style={headingStyle}>{products}</h2>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div
          className="card widget-flat"
          style={hoveredCard === 'services' ? { ...cardStyle, ...hoveredCardStyle } : cardStyle}
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-body" style={cardBodyStyle}>
            <div className="float-end">
              <i className="ri-wallet-2-line widget-icon" style={iconStyle} />
            </div>
            <h6 className="text-uppercase mt-0" style={textUppercaseStyle}>
              Total Services
            </h6>
            <h2 className="my-2" style={headingStyle}>{services}</h2>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div
          className="card widget-flat"
          style={hoveredCard === 'offers' ? { ...cardStyle, ...hoveredCardStyle } : cardStyle}
          onMouseEnter={() => handleMouseEnter('offers')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-body" style={cardBodyStyle}>
            <div className="float-end">
              <i className="ri-shopping-basket-line widget-icon" style={iconStyle} />
            </div>
            <h6 className="text-uppercase mt-0" style={textUppercaseStyle}>
              Total Offers
            </h6>
            <h2 className="my-2" style={headingStyle}>{offers}</h2>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-sm-6">
        <div
          className="card widget-flat"
          style={hoveredCard === 'orders' ? { ...cardStyle, ...hoveredCardStyle } : cardStyle}
          onMouseEnter={() => handleMouseEnter('orders')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-body" style={cardBodyStyle}>
            <div className="float-end">
              <i className="ri-file-list-2-line widget-icon" style={iconStyle} />
            </div>
            <h6 className="text-uppercase mt-0" style={textUppercaseStyle}>
              Total Orders
            </h6>
            <h2 className="my-2" style={headingStyle}>{orders}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
