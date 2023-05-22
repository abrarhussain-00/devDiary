import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <a href="https://www.linkedin.com/in/abrar-hussain00/" target="_blank" rel="noreferrer">
        <img src="../assets/images/linkedIn_icon.png" alt="LinkedIn" width='25px' style={{ borderRadius: '50px', marginLeft: "10px", border:'2px solid black' }} />
      </a>
      <a href="https://www.github.com/abrarhussain-00" target="_blank" rel="noreferrer">
        <img src="../assets/images/github.png" alt="GitHub" width='25px' style={{ borderRadius: '50px', marginLeft: "10px", border:'2px solid black' }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

