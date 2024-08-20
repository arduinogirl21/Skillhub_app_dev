import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './home.css';

function Home() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/signup'); 
  };

  return (
    <div className="home-container">
      <h1 className="home-title">SkillHub</h1>
      <button className="home-button" onClick={handleButtonClick}>
        Register
      </button>
    </div>
  );
}

export default Home;
