import React, { useState, useEffect } from 'react';
import SocialMediaIcons from '../assets/SocialMediaIcons';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        color: 'white',
        marginBottom: '7vh',
        fontSize: '20px', 
        // width:'100%'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        {isMobileView && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '25px',
              height: '20px',
              cursor: 'pointer',
              zIndex: 1,
            }}
            onClick={handleMenuClick}
          >
            <div
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'white',
                transition: 'background-color 0.3s',
                transform: `${isMenuOpen ? 'rotate(45deg) translate(0, 5px)' : 'none'}`,
              }}
            ></div>
            <div
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'white',
                transition: 'opacity 0.3s',
                opacity: `${isMenuOpen ? '0' : '1'}`,
              }}
            ></div>
            <div
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'white',
                transition: 'background-color 0.3s',
                transform: `${isMenuOpen ? 'rotate(-45deg) translate(0, -5px)' : 'none'}`,
              }}
            ></div>
          </div>
        )}
        {isMobileView ? (
          isMenuOpen && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a
                href="/"
                style={{
                  color: 'white',
                  textAlign: 'left',
                  textDecoration: 'none',
                  fontSize: '23px', 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'lightBlue';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                Home
              </a>
              <a
                href="/blogs"
                style={{
                  color: 'white',
                  textAlign: 'left',
                  textDecoration: 'none',
                  fontSize: '23px', 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'lightBlue';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                Blog
              </a>
              <a
                href="/contact"
                style={{
                  color: 'white',
                  textAlign: 'left',
                  textDecoration: 'none',
                  fontSize: '23px', 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'lightBlue';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                Contact
              </a>
              <SocialMediaIcons />
            </div>
          )
        ) : (
          <>
            <a
              href="/"
              style={{
                color: 'white',
                marginRight: '10px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'lightBlue';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              Home
            </a>
            <a
              href="/blogs"
              style={{
                color: 'white',
                marginRight: '10px',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'lightBlue';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              Blogs
            </a>
            <a
              href="/contact"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'lightBlue';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              Contact
            </a>
            <SocialMediaIcons />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
