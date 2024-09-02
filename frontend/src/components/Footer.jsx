
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-alt fw-medium" style={{ backgroundColor: '#462e05', color: 'black'}}>
      <span className="text-dark-emphasis">
        {currentYear} © ABC - Theme by ICBT
      </span>
    </footer>
  );
};

export default Footer;