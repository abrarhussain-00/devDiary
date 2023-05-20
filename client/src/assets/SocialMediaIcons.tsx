import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <a href="https://www.github.com/abrarhussain-00" target="_blank" rel="noreferrer">
        <img src="../assets/images/github.png" alt="GitHub" width='35px' style={{ borderRadius: '50px', marginLeft: "10px" }} />
      </a>
      <a href="https://www.linkedin.com/in/abrar-hussain00/" target="_blank" rel="noreferrer">
        <img src="../assets/images/linkedIn_icon.png" alt="LinkedIn" width='35px' style={{ borderRadius: '50px', marginLeft: "10px" }} />
      </a>
      <a href="https://www.abrardev.com/" target="black"><img src="https://img.icons8.com/?size=512&id=Meg71w7epZVz&format=png" 
        alt="portfolio site" height="40" width="40" style={{ marginLeft: "10px" }}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;

