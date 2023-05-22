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
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
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
            width: '30px',
            height: '24px',
            cursor: 'pointer',
            zIndex: 1,
          }}
          onClick={handleMenuClick}
        >
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'black',
              transition: 'transform 0.3s, opacity 0.3s',
              transformOrigin: 'center',
              transform: isMenuOpen ? 'rotate(45deg) translate(0, 7px)' : 'none',
            }}
          ></div>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'black',
              transition: 'opacity 0.3s',
              opacity: isMenuOpen ? '0' : '1',
            }}
          ></div>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'black',
              transition: 'transform 0.3s, opacity 0.3s',
              transformOrigin: 'center',
              transform: isMenuOpen ? 'rotate(-45deg) translate(0, -7px)' : 'none',
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
                  color: 'black',
                  textAlign: 'left',
                  textDecoration: 'none',
                  fontSize: '15px', 
                  fontWeight: '600',

                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'navy';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'black';
                }}
              >
                Home
              </a>
              <a
                href="/blogs"
                style={{
                  color: 'black',
                  textAlign: 'left',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'blue';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'black';
                }}
              >
                Blog
              </a>
              <a
                href="/contact"
                style={{
                  color: 'black',
                  textAlign: 'left',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '600',

                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'navy';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'black';
                }}
              >
                Contact
              </a>
              <a
                href="https://www.abrardev.com/"
                style={{
                  color: 'black',
                  textAlign: 'left',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'navy';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'black';
                }}
              >
                Portfolio
              </a>
              
              <SocialMediaIcons />
            </div>
          )
        ) : (
          <>
            <a
              href="/"
              style={{
                color: 'black',
                marginRight: '10px',
                textDecoration: 'none',
                fontWeight: '300',
                fontFamily: 'Verdana',
                fontSize: '14px',

              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'navy';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              Home
            </a>
            <a
              href="/blogs"
              style={{
                color: 'black',
                marginRight: '10px',
                textDecoration: 'none',
                fontWeight: '300',
                fontFamily: 'Verdana',
                fontSize: '14px',


              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'navy';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              Blogs
            </a>
            <a
              href="/contact"
              style={{
                color: 'black',
                marginRight: '10px',
                textDecoration: 'none',
                fontWeight: '300',
                fontFamily: 'Verdana',
                fontSize: '14px',

              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'navy';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              Contact
            </a>

            <a
              href="https://www.abrardev.com/"
              style={{
                color: 'black',
                textDecoration: 'none',
                fontWeight: '300',
                fontFamily: 'Verdana',
                fontSize: '14px',



              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'navy';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              Portfolio
            </a>
            <div style={{marginRight:'20px'}}>
              <SocialMediaIcons />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
