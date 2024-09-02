const AboutUs = () => {
  return (
    <div className="container-fluid" style={{  color: '#fff', padding: '3rem 1rem'  }}>
      {/* Page Title */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="page-title" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>About Our Journey</h1>
          <ol className="breadcrumb justify-content-center" style={{ fontSize: '1.2rem' }}>
            <li className="breadcrumb-item">
              <a href="javascript:void(0);" style={{ color: '#fff', textDecoration: 'none' }}>ABC Restaurant</a>
            </li>
            <li className="breadcrumb-item active" style={{ color: '#fff' }}>About Our Journey</li>
          </ol>
        </div>
      </div>

      {/* Our Story */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="mb-3" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#fff' }}>Our Story</h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#000' }}>
            Founded in 1996, ABC Restaurant has been a cornerstone of the community, dedicated to offering delightful culinary experiences with a commitment to top-notch service.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="row">
        {[
          { title: 'The Visionary', description: 'Discover the story of our visionary founder who laid the foundation for our restaurant and inspired countless culinary innovations.' },
          { title: 'Our Establishment', description: 'Step inside our restaurant, designed with elegance and warmth to provide a memorable dining experience for all our guests.' },
          { title: 'Culinary Delights', description: 'Explore our diverse menu that includes both classic and contemporary dishes crafted to satisfy every palate.' },
          { title: 'Exceptional Services', description: 'From personalized catering to convenient takeout options, we strive to offer services that enhance your dining experience.' },
          { title: 'Our Core Values', description: 'Our core values focus on delivering quality, hospitality, and excellence, ensuring each visit to our restaurant is exceptional.' },
          { title: 'Future Aspirations', description: 'Looking ahead, we aim to expand our influence and set new standards in the restaurant industry, driven by innovation and customer satisfaction.' }
        ].map((section, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100" style={{ 
              backgroundColor: '#FDFDFD', 
              color: '#fff',
              border: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem', fontWeight: '500', color: '#000' }}>{section.title}</h5>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>{section.description}</p>
              </div>
              <div className="card-footer" style={{ backgroundColor: '#FDFDFD', borderTop: '1px solid #EAEAEA' }}>
                <p className="text-muted text-center" style={{ fontSize: '0.9rem', color: '#fff' }}>Learn more about our journey and values.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
