import React from 'react';
import BlogNavBar from '../components/BlogNavBar';

const Blog = () => {
  const mediaQuery = `
    @media (max-width: 768px) {
      /* Adjust styles for screens with a maximum width of 768px */
      .flexContainer {
        flex-direction: column;
        align-items: flex-start;
      }
      .date {
        margin-left: 1rem;
      }
    }
  `;

  return (
    <div>
      <BlogNavBar />
      <hr style={{ marginLeft: '25%', marginRight: '25%', borderColor: 'darkgrey' }} />
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}>2023</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: 'black', marginRight: '10px' }}>24 March</p>
            <br />
            <p style={{ color: 'black', marginRight: '10px' }}>23 March</p>
            <br />
            <p style={{ color: 'black', marginRight: '10px' }}>22 March</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>

          <p style={{ color: 'rgb(102, 186, 247)', fontWeight: 'bold', wordBreak: 'break-word', textDecoration: 'none' }}>
              <a href="/day3" style={{ color: 'rgb(102, 186, 247)', textDecoration: 'none' }}>Keeping My Head Up</a>
            </p>

            <br />

            <p style={{ color: 'rgb(102, 186, 247)', fontWeight: 'bold', wordBreak: 'break-word', textDecoration: 'none' }}>
              <a href="/day2" style={{ color: 'rgb(102, 186, 247)', textDecoration: 'none' }}>Getting Adjusted</a>
            </p>

            <br />

            <p style={{ color: 'rgb(102, 186, 247)', fontWeight: 'bold', wordBreak: 'break-word', textDecoration: 'none' }}>
              <a href="/day1" style={{ color: 'rgb(102, 186, 247)', textDecoration: 'none' }}>My First Post!</a>
            </p>

          </div>
        </div>
      </div>
      <style>{mediaQuery}</style>
    </div>
  );
};

export default Blog;
